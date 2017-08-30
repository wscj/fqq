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

router.post('/addMsg', (req, res) => {

	Sqlite.addMsg(req.body);
	res.send('');

});


router.get('/getConversation', (req, res) => {

	Sqlite.getConversation({
		uid: req.uid,
		friendID: req.query.friendID,
		callback: function(arg) {
			(arg.error === 0) && res.send({ list: arg.list });
		}
	});

});

router.get('/getMsgList', (req, res) => {

	Sqlite.getMsgList({
		uid: req.uid,
		callback: function(arg) {
			(arg.error === 0) && res.send({ list: arg.list });
		}
	});

});

router.get('/getFriendList', (req, res) => {
	
	Sqlite.getFriendList({
		uid: req.uid,
		callback: function(arg) {
			(arg.error === 0) && res.send({ list: arg.list });
		}
	});

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

router.post('/post_test', (req, res) => {
	res.send('test ok');
});

module.exports = router;