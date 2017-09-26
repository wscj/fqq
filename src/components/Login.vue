<template>
	<div class="login" @keyup.enter="login" name="login-panel">
		<div class="avatar">
			<img :src="'/static/img/' + avatar + '.jpg'">
		</div>
		<div class="info">
			<div class="account">
				<b class="user"></b>
				<input type="number" id="account" @input="input" v-model="account"
					 placeholder="4位数字帐号" autocomplete="off">
			</div>
			<div class="password">
				<b class="pwd"></b>
				<input type="password" placeholder="密码" v-model="pwd">
			</div>
			<div class="btn">
				<input type="button" @click="login" value="登录" :style="styleObj">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			account: '',
			pwd: '',
			avatar: 'default'
		}
	},
	computed: {
		styleObj () {
			const disabled = this.account.length === 4 && this.pwd.length;
			return {
				color: disabled ? '#fff' : '#bbb',
				background: disabled ? '#4b93fe' : '#e9ebec'
			}
		}
	},
	methods: {
		input (e) {
			var value = e.target.value;
			if (value.length === 4) {
				this.$http.get(`/static/img/${value}.jpg`).then(
					r => {
						if (r.body !== "Verify fail!") {
							this.avatar = value;
						}
					}
				)
			} else {
				if (this.avatar !== 'default') {
					this.avatar = 'default';
				}
			}
		},
		login () {
			if (!(this.account.length === 4 && this.pwd.length)) {
				return;
			}
			if (!this.account.trim().length) {
				this.fn.warn('帐号不能为空');
			}
			else if (!this.pwd.trim().length) {
				this.fn.warn('密码不能为空');
			}
			else {
				const options = { params: { account: this.account.trim(), pwd: md5(this.pwd.trim()) } };
				this.$http.get('/login', options).then(
					(resp) => {
						if (resp.body.token) {
							localStorage.token = resp.body.token;
							localStorage.user = JSON.stringify(resp.body.user);
							const to = this.$route.query.redirect || '/';
							this.$store.commit('setUser', resp.body.user);
							this.$store.dispatch('loadding', { onShow: true, text: '故意延迟，等一下咯！！', time: 1000 });
							setTimeout(() => {
								this.$router.replace({ path: to });
								this.pwd = ''; //密码要清空
								console.log('登录成功');
							}, 1000);
						}
						else {
							this.fn.warn(resp.body.error);
						}
					},
					(resp) => { console.error('fail', resp); }
				)
			}
		},
	},
	mounted: function() {
		this.$el.querySelector('#account').focus();
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/sass/function';
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
		height: px2rem(750px);
		/*background-color: pink;*/
	}
	.avatar img {
		width: px2rem(390px);
		height: px2rem(390px);
		border-radius: 50%;
	}
	.info {
		/*margin: px2rem(270px) 0 0 0;*/
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
		margin: px2rem(150px) px2rem(60px);
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
</style>
