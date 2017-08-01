const router = require('express').Router();

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

	const token = jwt.sign({
		exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, //24小时后过期
		account: req.query.account
	}, 'mySecret');

	res.send({ token: token });
});

router.get('/getMsgList', (req, res) => {
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
})

router.post('/post_test', (req, res) => {
	res.send('test ok');
})

module.exports = router;