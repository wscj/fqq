const router = require('express').Router();
const Sqlite = require('./sqlite');
const path = require('path');
const multer = require('multer');
const fse = require('fs-extra');
require('../src/assets/js/common/Date.js')

fse.ensureDirSync('upload-files');

//配置上传文件的信息
const storage = multer.diskStorage({
	filename: function(req, file, cb) {
		cb(null, file.originalname);
	},
	destination: function (req, file, cb) {
		cb(null, 'upload-files/')
	},
});

const upload = multer({ storage: storage });

//处理身份验证
router.use(function(req, res, next) {

	function unvalid(res) {
		// res.append('Verify', 'fail');
		res.status(403).sendFile(path.join(__dirname, '../index.html'));
	}

	//登录的请求不需要token
	if (req.url.substr(0, 6) !== '/login' && req.url.substr(0, 9) !== '/register') {
		const token = req.body.token || req.query.token || req.headers['x-access-token'];
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

router.get('/download', (req, res) => {

	const file = path.join(__dirname, '../static/file-for-download.png');
	res.set({
		'Content-Type': 'image/png'
	});

	res.sendFile(file, err => {
		if (err) {
			console.log(err);
			res.status(err.status).end();
		}
		else {
			console.log('send success.');
		}
	})

});

router.get('/getConversation', (req, res) => {

	Sqlite.getConversation({
		uid: req.uid,
		friendID: req.query.friendID,
		callback: function(err, list) {
			if (err) {
				throw new Error(err);
			}
			res.send({ list: list });
		}
	});

});

router.get('/getFriendList', (req, res) => {
	
	Sqlite.getFriendList({
		uid: req.uid,
		callback: function(err, list) {
			if (err) {
				throw new Error(err);
			}
			res.send({ list: list });
		}
	});

});

router.get('/getMsgList', (req, res) => {

	Sqlite.getMsgList({
		uid: req.uid,
		callback: function(err, list) {
			if (err) {
				throw new Error(err);
			}
			res.send({ list: list });
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
		callback: function(err, list) {
			if (err) {
				throw new Error(err);
			}
			const row = list[0];
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
	});

});

router.post('/post_test', (req, res) => {
	res.send('test ok');
});

router.post('/upload', upload.single('file'), (req, res) => {
	res.send({ error: 0 });
});

// 错误码为２：帐号不符合规范
router.post('/register', (req, res) => {
	const account = Number(req.body.account) + '';
	//帐号不是阿拉伯数字
	if (isNaN(Number(req.body.account))) {
		res.send({ error: 2 });
	}
	else if (account.length < 4 || account.length > 11) {
		res.send({ error: 2 });
	}
	else {
		req.body.callback = function(err, errorCode) {
			if (err) {
				throw new Error(err);
			}
			res.send({ error: errorCode });
		}
		Sqlite.register(req.body);
	}
});

module.exports = router;