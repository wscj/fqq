<template>
	<div class="footer">
		<router-link to="/">
			<!-- <img src="../../assets/img/msg_active.png"> -->
			<!-- <img v-bind:src="msgIcon"> -->
			<b class="msg"></b>
			<span>消息</span>
		</router-link>
		<router-link to="/contacts">
			<!-- <img src="../../assets/img/user.png"> -->
			<b class="contacts"></b>
			<span>联系人</span>
		</router-link>
		<router-link to="/dynamic">
			<!-- <img src="../../assets/img/qzone.png"> -->
			<b class="dynamic"></b>
			<span>动态</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'footer',
	data () {
		return {
			msgIcon: '../../assets/img/msg_active.png'
		}
	}
}
</script>

<style scoped>
	.footer {
		position: fixed;
		bottom: 0;
		height: 1.2rem;
		width: 100%;
		border-top: 1px solid #e6e6e6;
		display: flex;
		background-color: #fff;
	}
	.footer > a {
		flex: 1;
		height: 100%;
		text-align: center;
	}
	.footer b {
		display: inline-block;
		width: .6rem;
		height: .6rem;
		margin-top: .12rem;
		background-size: .6rem;
	}
	.footer span {
		display: block;
		font-size: .22rem;
		color: #a0a0a0;
	}
	.msg {
		background: url('../../assets/img/msg.png') no-repeat;
	}
	.contacts {
		background: url('../../assets/img/user.png') no-repeat;
	}
	.dynamic {
		background: url('../../assets/img/qzone.png') no-repeat;
	}
	.router-link-exact-active .msg {
		background: url('../../assets/img/msg_active.png') no-repeat;
		background-size: .6rem;
	}
	.router-link-exact-active .contacts {
		background: url('../../assets/img/user_active.png') no-repeat;
		background-size: .6rem;
	}
	.router-link-exact-active .dynamic {
		background: url('../../assets/img/qzone_active.png') no-repeat;
		background-size: .6rem;
	}
	.router-link-exact-active span {
		color: #47bafe;
	}
</style>