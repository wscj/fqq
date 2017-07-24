<template>
	<div class="footer">
		<div>
			<img src="../../assets/img/msg_active.png">
			<span>消息</span>
		</div>
		<div>
			<!-- <a v-link="{path: '/show-panel'}"> -->
			<img src="../../assets/img/user.png">
			<span>联系人</span>
				
			</a>
		</div>
		<div>
			<img src="../../assets/img/qzone.png">
			<span>动态</span>
		</div>
	</div>
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
	.footer > div {
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