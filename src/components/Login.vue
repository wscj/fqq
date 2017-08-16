<template>
	<div class="login" @keyup.enter="login">
		<!-- <div class="avatar">
			<img src="/static/img/avatar.jpg">
		</div> -->
		<div class="info">
			<div class="account">
				<b class="user"></b>
				<input type="number" id="account" placeholder="4位数字帐号" v-model="account">
			</div>
			<div class="password">
				<b class="pwd"></b>
				<input type="password" placeholder="密码" v-model="pwd">
			</div>
			<div class="btn">
				<input type="button" @click="login" value="登录">
			</div>
			<div class="btn">
				<input type="button" @click="test" value="测试">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			account: '',
			pwd: ''
		}
	},
	methods: {
		login: function() {
			if (!this.account.trim().length) {
				F.warn('帐号不能为空');
			}
			else if (!this.pwd.trim().length) {
				F.warn('密码不能为空');
			}
			else {
				const options = { params: { account: this.account.trim(), pwd: md5(this.pwd.trim()) } };
				this.$http.get('/login', options).then(
					(resp) => {
						if (resp.body.token) {
							localStorage.token = resp.body.token;
							localStorage.user = JSON.stringify(resp.body.user);
							this.$router.replace(this.$route.query.redirect || '/');
							console.log('登录成功');
						}
						else {
							F.warn(resp.body.error);
						}
					},
					(resp) => { console.error('fail', resp);}
				)
			}
		},
		test: function() {
			
		}
	},
	mounted: function() {
		document.getElementById('account').focus();
	}
}
</script>

<style scoped>
	.login {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
	}	
	.avatar {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 5rem;
	}
	.avatar img {
		width: 2.6rem;
		height: 2.6rem;
		border-radius: 50%;
	}
	.info {
		margin: 1.8rem 0 0 0;
	}
	.account,
	.password {
		position: relative;
		height: .8rem;
		margin: .2rem .4rem;
	}
	.account > b,
	.password > b {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: .8rem;
		height: .8rem;
		background-position: center;
		z-index: 2;
	}
	.user {
		background: url('../assets/img/user2.png') no-repeat;
		background-size: .6rem .6rem;
	}
	.pwd {
		background: url('../assets/img/password.png') no-repeat;
		background-size: .52rem .52rem;
	}
	.account input,
	.password input {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
		border-bottom: 1px solid #ccc;
		text-indent: 1rem;
		font-size: .36rem;
	}
	.btn {
		margin: 1rem .4rem;
	}
	.btn input {
		width: 100%;
		height: .8rem;
		border-radius: .1rem;
		border: none;
		font-size: .34rem;
		background-color: #4b93fe;
		color: #fff;
	}
	.account input::placeholder,
	.password input::placeholder {
		color: #ccc;
		/*font-style: italic;*/
	}
</style>
