<template>
	<div class="msg" :class="'msg-' + dir">
		<div class="avatar">
			<img :src="'/static/img/' + avatar + '.jpg'">
		</div>
		<div class="content">
			<span :class="dir">{{ msg || '&nbsp;' }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['dir', 'avatar', 'msg']
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.msg {
		display: flex;
		margin: px2rem(60px) 0;
	}
	.msg-left {
		flex-direction: row;
	}
	.msg-right {
		flex-direction: row-reverse;
	}
	.left {
		float: left;
		background: #fff !important;
		color: #000 !important;
	}
	.right {
		float: right;
		background: #10b5f6 !important;
		color: #fff !important;
	}
	.left:before,
	.right:after {
		content: '';
		position: absolute;
		top: px2rem(44px);
		display: block;
		width: px2rem(32px);
		height: px2rem(44px);
		border-style: solid;
		box-sizing: border-box;
	}
	.left:before {
		left: px2rem(-18px);
		border-width: px2rem(20px) px2rem(30px);
		border-color: transparent #fff transparent transparent;
		border-left: none;
	}
	.right:after {
		right: px2rem(-18px);
		border-width: px2rem(20px) px2rem(30px);
		border-color: transparent transparent transparent #10b5f6;
		border-right: none;
	}
	.avatar {
		width: px2rem(195px);
		background-color: #f0f2f8;
	}
	.avatar img {
		width: px2rem(135px);
		border-radius: 50%;
		margin: 0 auto;
		display: block;
	}
	.content {
		flex: 1;
	}
	.content > span {
		background-color: #fff;
		font-size: px2rem(42px);
		color: #000;
		display: inline-block;
		max-width: px2rem(600px);
		padding: px2rem(35.4px) px2rem(39px);
		border-radius: px2rem(36px);
		position: relative;
	}
</style>