<template>
	<div class="register" @keyup.enter="register" name="register-panel">
		<div class="info">
			<p class="title">注册新用户</p>
			<div class="error">{{ errorMsg }}</div>
			<div class="account">
				<b class="user"></b>
				<input type="number" id="account" v-model="account"
					 placeholder="4~11位数字帐号" autocomplete="off">
			</div>
			<div class="password">
				<b class="pwd"></b>
				<input type="password" placeholder="密码" v-model="pwd">
			</div>
			<div class="password">
				<b class="pwd"></b>
				<input type="password" placeholder="确认密码" v-model="pwdConfirm">
			</div>
			<div class="btn">
				<input type="button" @click="register" value="注册" :style="styleObj">
			</div>
			<p class="login" @click="back">返回登录</p>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			account: '',
			pwd: '',
			pwdConfirm: '',
			errorMsg: ''
		}
	},
	computed: {
		styleObj () {
			return {
				color: this.disabled ? '#fff' : '#bbb',
				background: this.disabled ? '#4b93fe' : '#e9ebec'
			}
		},
		disabled () {
			return this.account.length >= 4 
				&& this.account.length < 12 
				&& this.pwd.length
				&& this.pwd.length === this.pwdConfirm.length;
		}
	},
	methods: {
		register () {
			if (!this.disabled) {
				return;
			}

			if (this.pwd !== this.pwdConfirm) {
				this.errorMsg = '**密码不一致**'
				this.animate();
				return;
			}

			const param = { account: this.account, pwd: md5(this.pwd) }
			this.$http.post('/register', param).then(
				resp => {
					if (resp.body.error === 1) {
						this.errorMsg = '**帐号已存在**'
						this.animate();
					}
					else if (resp.body.error === 2) {
						this.errorMsg = '**帐号不符合规范**'
						this.animate();
					}
					else if (resp.body.error === 0) {
						this.$store.dispatch('tip', { 
							onShow: true, 
							text: '注册完成',
							callback: () => {
								this.$router.replace({ path: '/login' });
							}
						});
					}
				},
				resp => {
					console.log(resp);
				}
			)
		},
		animate () {
			const div = this.$el.querySelector('.error');
			div.className = 'error';
			setTimeout(function() {
				div.className = 'error play';
			}, 0);
		},
		back () {
			this.$router.replace({ path: '/login' });
		}
	},
	mounted: function() {
		this.$el.querySelector('#account').focus();
	},
	activated () {
		this.pwd = this.account = this.pwdConfirm = '';
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/sass/function';
	.register {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.account,
	.password {
		position: relative;
		height: px2rem(120px);
		margin: px2rem(30px) px2rem(60px);
	}
	.account > b,
	.password > b {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: px2rem(120px);
		height: px2rem(120px);
		background-position: center;
		z-index: 2;
	}
	.user {
		background: url('../assets/img/user2.png') no-repeat;
		background-size: px2rem(90px) px2rem(90px);
	}
	.pwd {
		background: url('../assets/img/password.png') no-repeat;
		background-size: px2rem(78px) px2rem(78px);
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
		text-indent: px2rem(150px);
		font-size: px2rem(54px);
	}
	.btn {
		margin: px2rem(150px) px2rem(60px) 0;
	}
	.btn input {
		width: 100%;
		height: px2rem(120px);
		border-radius: px2rem(15px);
		border: none;
		font-size: px2rem(51px);
		// background-color: #4b93fe;
		color: #fff;
	}
	.account input::placeholder,
	.password input::placeholder {
		color: #ccc;
	}
	.title {
		text-align: center;
		font-size: px2rem(62px);
		margin: px2rem(200px) 0 px2rem(80px);
		color: #4b93fe;
	}
	.error {
		text-align: center;
		margin-bottom: px2rem(100px);
		color: red;
		font-size: px2rem(42px);
		height: px2rem(36px);
	}
	.play {
		animation-name: c-width;
		animation-duration: 400ms;
		animation-timing-function: ease;
	}
	@keyframes c-width {
		0% { width: 100% }
		25% { width: 90% }
		50% { width: 110% }
		75% { width: 90% }
		100% { width: 100% }
	}
	.login {
		text-align: right;
		padding: px2rem(20px) px2rem(70px);
		color: #0366d6;
	}
</style>
