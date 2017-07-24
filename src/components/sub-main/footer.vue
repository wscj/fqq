<template>
	<div class="footer">
		<router-link to="/">
			<img src="../../assets/img/msg_active.png">
			<span>消息</span>
		</router-link>
		<router-link to="/contacts">
			<img src="../../assets/img/user.png">
			<span>联系人</span>
		</router-link>
		<router-link to="/news">
			<img src="../../assets/img/qzone.png">
			<span>动态</span>
		</router-link>
	</div>
	<!-- <div class="temp">
			<router-link to="/">aaa</router-link>
			<router-link to="/contacts">bbb</router-link>
			<router-link to="/news">ccc</router-link>
		</div> -->
</template>

<script>
export default {
	name: 'footer',
	data () {
		return {
			msg: 'Footer'
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
		border-top: 1px solid #ccc;
		display: flex;
		background-color: #fff;
	}
	.footer > a {
		flex: 1;
		height: 100%;
		text-align: center;
	}
	.footer img {
		width: .6rem;
		margin-top: .12rem;
	}
	.footer span {
		display: block;
		font-size: .22rem;
		color: #a0a0a0;
	}
</style>