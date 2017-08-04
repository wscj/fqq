/**
 * * sqlite数据库模块
 * * 该模块的接口统一采用异步的方式，所以没有返回值，都是靠回调函数传递数据。
 * * 如接口需要返回数据则参数中必须有一个回调函数，并且该函数的参数统一为一个object对象，其中必须包含一个状态码error，状态码意义如下：
 * 	+ 0: 运行正常无错误
 * 	+ 1: 不明确异常
 *  + 2: ...
 * @module Sqlite
 */
(function(Sqlite) {
 	const fse = require("fs-extra");
    const sqlite3 = require('sqlite3').verbose();
	const dbPath = './fqq.db';

	const isDbExists = fse.existsSync(dbPath);

	if (!isDbExists) {
	    fse.ensureFileSync(dbPath);
	}
	db = new sqlite3.Database(dbPath);

	if (!isDbExists) {
		const sqls = [];

		/**
		 * @member t_user
		 * @type {table}
		 * @private
		 * @description 用户表
		 */
		sqls.push(`
			create table t_user (
				account Varchar(10) not null,
				pwd Varchar(50) not null,
				name NVarchar(20),
				signature NVarchar(50),
				sex Int2 default 1
			)
		`);

		/**
		 * @member t_msg
		 * @type {table}
		 * @private
		 * @description 消息表
		 * |字段名|类型|说明|
		 * |--|--|--|
		 * |from_id|Integer|外键，对应t_user表的rowid，表示这条信息是谁发出去的|
		 * |to_id|Integer|外键，对应t_user表的rowid，表示这条信息是发给谁的，如果是群信息，则改字段为空|
		 * |conversation_id|Varchar(10)|两个人的会话id，两个用户的id中间用下划线相连，id较小的在前|
		 * |group_id|Integer|外键，对应t_group表的rowid，表示这条信息是发给哪个群的，如果不是群信息，则改字段为空|
		 * |time|DATETIME|消息发送的时间|
		 */
		sqls.push(`
			create table t_msg (
				from_id Integer not null,
				to_id Integer,
				conversation_id Varchar(10) not null,
				group_id Integer,
				content NVarchar(1000),
				time DATETIME default current_timestamp
			)
		`);

		/**
		 * @member t_relation
		 * @type {table}
		 * @private
		 * @description 好友关系表
		 * |字段名|类型|说明|
		 * |--|--|--|
		 * |user1_id|Integer|外键，对应t_user表的rowid，表示与user2是好友|
		 * |user2_id|Integer|外键，对应t_user表的rowid，表示与user1是好友|
		 * |remark|NVarchar(30)|user1对user2的备注名称|
		 * |friend_group_id|Integer|外键，对应friend_group的rowid，表示user2在user1的哪个好友分组|
		 */
		sqls.push(`
			create table t_relation (
				user1_id Integer not null,
				user2_id Integer not null,
				remark NVarchar(30),
				friend_group_id Integer
			)
		`);

		/**
		 * @member t_friend_group
		 * @type {table}
		 * @private
		 * @description 好友分组表
		 * |字段名|类型|说明|
		 * |--|--|--|
		 * |user1_id|Integer|外键，对应t_user表的rowid，表示该分组属于哪位用户|
		 * |name|NVarchar(20)|好友分组名称|
		 */
		sqls.push(`
			create table t_friend_group (
				user_id Integer not null,
				name NVarchar(20) not null
			)
		`);

		/**
		 * @member t_dynamic
		 * @type {table}
		 * @private
		 * @description 空间动态表
		 * |字段名|类型|说明|
		 * |--|--|--|
		 * |user_id|Integer|外键，对应t_user表的rowid，表示这是谁发表的动态|
		 * |content|NVarchar(200)|动态的文字内容|
		 * |img|Varchar(50)|动态的图片文件名|
		 */
		sqls.push(`
			create table t_dynamic (
				user_id Integer not null,
				content NVarchar(200),
				img Varchar(50)
			)
		`);

		/**
		 * @member t_group
		 * @type {table}
		 * @private
		 * @description Q群表
		 */
		sqls.push(`
			create table t_group (
				name NVarchar(20)
			)
		`);

		/**
		 * @member t_group_and_user
		 * @type {table}
		 * @private
		 * @description 用户与Q群的中间表
		 */
		sqls.push(`
			create table t_group_and_user (
				user_id Integer not null,
				group_id Integer not null	
			)
		`);

		//初始化数据
		sqls.push(`
			insert into t_user (account, pwd, name, signature, sex)
			select '6661', '202cb962ac59075b964b07152d234b70', '666', '做个美男子', 1
			union select '6662', '202cb962ac59075b964b07152d234b70', '西瓜', '好好学习 | 天天向上', 1
			union select '6663', '202cb962ac59075b964b07152d234b70', '圆头', '?????', 1
			union select '6664', '202cb962ac59075b964b07152d234b70', '猴子', '2017加油！！！', 0
			union select '6665', '202cb962ac59075b964b07152d234b70', '动感超人', '哈哈哈！！！', 0
			union select '6666', '202cb962ac59075b964b07152d234b70', 'Q昵称', '做自己喜欢做的事', 1
		`);
		sqls.push(`
			insert into t_friend_group (user_id, name)
			select 6, '特别关注'
			union select 6, '我的好友'
			union select 6, '同学'
		`);
		sqls.push(`
			insert into t_relation (user1_id, user2_id, remark, friend_group_id)
			select 6, 1, '备注为逗逼', 1
			union select 6, 2, '', 1
			union select 6, 3, '', 1
			union select 6, 4, '', 2
			union select 6, 5, '', 2
		`);
		sqls.push(`
			insert into t_msg (from_id, to_id, conversation_id, content, time)
			select 6, 1, '1_6', '嗯嗯', current_timestamp
			union select 6, 2, '2_6', '敲代码去，我在自己搞个vue.js的项目来玩，不然老学不到这些新的技术', datetime(1493941446, 'unixepoch')
			union select 3, 6, '3_6', '我有一把大大的雨伞', datetime(1493941466, 'unixepoch')
			union select 6, 3, '3_6', '明天记得带过来，可能会下大暴雨啊', datetime(1493941468, 'unixepoch')
			union select 3, 6, '3_6', 'ok', datetime(1493941469, 'unixepoch')
			union select 6, 4, '4_6', '是的，就是这么6', datetime(1493941436, 'unixepoch')
			union select 6, 5, '5_6', '[好咧]', datetime(1493941426, 'unixepoch')
		`);

		(function exec(sqls) {
			if (sqls.length) {
				db.run(sqls.shift(), (err) => {
					err ? console.error(err) : exec(sqls);
				});
			}
			else {
				Sqlite.isInited = true;
			}
		}(sqls));
	}

	/**
	 * 获取好友列表
	 * @method getFriendList
	 * @param  {object} arg
	 * @param {string} arg.uid 帐号
	 * @param {function} arg.callback 参数`list`为返回好友列表信息
	 */
	Sqlite.getFriendList = function(arg) {
		const sql = `select b.*, a.rowid, a.name as groupName from 
						(select rowid, * from t_friend_group where user_id = ${arg.uid}) a
					left join 
						(select c.*, d.friend_group_id 
						 from   t_user c, (select user2_id, friend_group_id 
						 				   from   t_relation 
						 				   where  user1_id = ${arg.uid}) d
						 where c.rowid = d.user2_id) b
					on a.rowid = b.friend_group_id
					order by a.rowid desc`;
		db.all(sql, (err, rows) => {
			err && console.error(err);
			if (!err && arg.callback) {

				const list = [];
				let groupName;

				//构造好友好友列表的数据格式
				rows.forEach(function(item) {
					const index = Math.floor(Math.random() * 3);
					const user = {
						name: item.name,
						sex: item.sex,
						account: item.account,
						signature: item.signature,
						state: ['离线', '手机在线', '4G在线'][index]
					}
					if (groupName !== item.groupName) {
						groupName = item.groupName;

						list.push({
							name: groupName,
							online: (index && user.name) ? 1 : 0,
							offline: (!index && user.name) ? 1 : 0,
							friends: user.name ? [user] : []
						});
					}
					else {
						const last = list[list.length - 1];
						last.online  += (index ? 1 : 0);
						last.offline += (index ? 0 : 1);
						last.friends.push(user);
					}
				});

				arg.callback({ error: 0, list: list });
			}
		});
	}

	/**
	 * 获取消息列表
	 * @method getMsgList
	 * @param  {object} arg
	 * @param {string} arg.account 帐号
	 * @param {function} arg.callback 参数`list`为返回消息列表信息
	 */
	Sqlite.getMsgList = function(arg) {
		const sql = `
			select a.*, c.name, c.account
			from   t_msg a
					join (select conversation_id, max(time) as last_time
						  from   t_msg
						  where  from_id = ${arg.uid} or to_id = ${arg.uid}
						  group  by conversation_id) b
						on a.conversation_id = b.conversation_id and a.time = b.last_time
					join t_user c 
						on (from_id = ${arg.uid} and c.rowid = a.to_id) or (to_id = ${arg.uid} and c.rowid = a.from_id)
			order  by time desc
		`;
		db.all(sql, (err, rows) => {
			err && console.error(err);
			if (!err && arg.callback) {
				const list = rows.map(function(row) {
					const now = new Date();
					const today = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`);
					const t = new Date(row.time);
					const lastTime = t < today ? row.time.substr(0, 10) : row.time.substr(row.time.length - 5, 5);
					//`${t.getHours()}:${t.getMinutes()}`
					return {
						name: row.name,
						account: row.account,
						lastTime: lastTime,
						lastMsg: row.content
					}
				});
				arg.callback({ error: 0, list: list });
			}
		});
	}

	/**
	 * 登录
	 * @method login
	 * @param  {object} arg
	 * @param {string} arg.account 帐号
	 * @param {string} arg.pwd 密码
	 * @param {function} arg.callback 参数`list`为返回登录用户的信息
	 */
	Sqlite.login = function(arg) {
		const sql = `select rowid, * from t_user 
					where account = '${arg.account}'
					and pwd = '${arg.pwd}'`;
		db.get(sql, (err, row) => {
			!err && arg.callback && arg.callback({ error: 0, list: [row] });
		});
	}

}(module.exports))