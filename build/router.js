const router = require('express').Router();
const Sqlite = require('./sqlite');

//处理身份验证
router.use(function(req, res, next) {

	function unvalid(res) {
		res.append('Verify', 'fail');
		res.send('Verify fail!');
	}

	//登录的请求不需要token
	if (req.url.substr(0, 7) !== '/login?') {
		const token = req.headers['authorization'];
		if (!token) {
			unvalid(res);
		}
		else {
			try {
				const jwt = require('jsonwebtoken');
				const decoded = jwt.verify(token, 'mySecret');
				req.account = decoded.account;
				req.uid = decoded.uid;
				next();
			} catch (err) {
				unvalid(res);
			}
		}
	} else {
		next();
	}
});

//用户登录
router.get('/login', (req, res) => {
	const jwt = require('jsonwebtoken');

	//调用数据库的登录接口
	Sqlite.login({
		account: req.query.account,
		pwd: req.query.pwd,
		callback: function(arg) {
			if (arg.error === 0) {
				const row = arg.list[0];
				if (row) {
					const token = jwt.sign({
						exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, //24小时后过期
						account: row.account,
						uid: row.rowid
					}, 'mySecret');

					res.send({ token: token, user: row });
				}
				else {
					res.send({ error: '帐号或密码错误' });
				}
			}
		} 
	});

});

router.get('/getMsgList', (req, res) => {
	console.log(11, req.uid);
	const list = [{
		name: '猴子',
		account: '6664',
		lastTime: '9:35',
		lastMsg: '嗯嗯'
	}, {
		name: '西瓜',
		account: '6662',
		lastTime: '15:12',
		lastMsg: '敲代码去，我在自己搞个vue.js的项目来玩，不然老学不到这些新的技术'
	}, {
		name: '666',
		account: '6661',
		lastTime: '昨天',
		lastMsg: '明天记得带过来，可能会下大暴雨啊'
	}, {
		name: '圆头',
		account: '6663',
		lastTime: '昨天',
		lastMsg: '是的，就是这么6'
	}, {
		name: '动感超人',
		account: '6665',
		lastTime: '昨天',
		lastMsg: '[好咧]'
	}]
	res.send({ list: list });
});

router.get('/getFriendList', (req, res) => {
	`select b.*, a.rowid, a.name from 
			(select rowid, * from t_friend_group where user_id = 6) a
			left join 
			(select c.rowid, c.*, d.friend_group_id from t_user c, (select user2_id, friend_group_id from t_relation where user1_id = 6) d
			 where c.rowid = d.user2_id) b
			on a.rowid = b.friend_group_id
		order by a.rowid`
	const list = [{
		name: '特别关心',
		onlineCount: '2/3',
		friends: [{
			name: '猴子',
			sex: 1,
			account: '6664',
			signature: '2017加油！！！',
			state: '手机在线'
		}, {
			name: '西瓜',
			sex: 1,
			account: '6662',
			signature: '好好学习 | 天天向上',
			state: '4G在线'
		}, {
			name: '666',
			sex: 1,
			account: '6661',
			signature: '做个美男子',
			state: '离线'
		}]
	}, {
		name: '我的好友',
		onlineCount: '2/2',
		friends: [{
			name: '圆头',
			sex: 1,
			account: '6663',
			signature: '?????',
			state: '手机在线'
		}, {
			name: '动感超人',
			sex: 1,
			account: '6665',
			signature: '哈哈哈！！！',
			state: '4G在线'
		}, {
			name: '666',
			sex: 1,
			account: '6661',
			signature: '做个美男子',
			state: '离线'
		}, {
			name: '666',
			sex: 1,
			account: '6661',
			signature: '做个美男子',
			state: '离线'
		}, {
			name: '666',
			sex: 1,
			account: '6661',
			signature: '做个美男子',
			state: '离线'
		}, {
			name: '666',
			sex: 1,
			account: '6661',
			signature: '做个美男子',
			state: '离线'
		}, {
			name: '666',
			sex: 1,
			account: '6661',
			signature: '做个美男子',
			state: '离线'
		}]
	}, {
		name: '同学', 
		onlineCount: '0/0',
		friends: []
	}];
	res.send({ list: list });
})

router.post('/post_test', (req, res) => {
	res.send('test ok');
});

module.exports = router;