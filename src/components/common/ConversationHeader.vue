<template>
	<div class="header">
		<div class="left" @click="leftClick">
			<span>返回</span>
		</div>
		<div class="center">
			<p>{{ bTitle }}</p>
			<span>手机在线-WiFi</span>
		</div>
		<div class="right">
			<b></b>
			<b></b>
		</div>
	</div>
</template>

<script>
import SimpleHeader from './SimpleHeader'
export default {
	mixins: [SimpleHeader],
	props: ['bTitle']
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.header {
		position: relative;
		width: 100%;
		height: px2rem(150px);
		background: -webkit-linear-gradient(left top, #4f8cfe , #39b9fe);
		line-height: px2rem(150px);
		color: #fff;
		font-size: px2rem(48px);
		.left {
			position: absolute;
			top: 0;
			left: 0;
			width: px2rem(224px);
			height: 100%;
			z-index: 2;
			> span:before {
				content: '';
				display: block;
				width: px2rem(90px);
				height: px2rem(150px);
				line-height: px2rem(150px);
				float: left;
				background: url('../../assets/img/back.png') no-repeat;
				background-size: px2rem(74px);
				background-position: right center;
			}
		}
		.center {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			text-align: center;
			> p {
				height: px2rem(90px);
				line-height: px2rem(114px);
				font-size: px2rem(54px);
			}
			> span {
				display: block;
				font-size: px2rem(30px);
				height: px2rem(60px);
				line-height: px2rem(44px);
			}
		}
		.right {
			position: absolute;
			top: 0;
			right: 0;
			width: px2rem(300px);
			height: 100%;
			z-index: 2;
			> b {
				display: block;
				float: right;
				width: px2rem(104px);
				height: px2rem(150px);
				background-image: url('../../assets/img/user3.png');
				background-repeat: no-repeat;
				background-size: px2rem(72px) px2rem(72px);
				background-position: center;
			}
			> b:nth-child(2) {
				background-image: url('../../assets/img/phone.png');
			}
			> b:nth-child(1) {
				margin-right: px2rem(14px);
			}
		}
	}
</style>