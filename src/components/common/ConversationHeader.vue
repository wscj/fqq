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

<style scoped>
	.header {
		position: relative;
		width: 100%;
		height: 1rem;
		background: -webkit-linear-gradient(left top, #4f8cfe , #39b9fe);
		line-height: 1rem;
		color: #fff;
		font-size: .32rem;
	}
	.left {
		position: absolute;
		top: 0;
		left: 0;
		width: 1.5rem;
		height: 100%;
		z-index: 2;
	}
	.left > span:before {
		content: '';
		display: block;
		width: .6rem;
		height: 1rem;
		line-height: 1rem;
		float: left;
		background: url('../../assets/img/back.png') no-repeat;
		background-size: .5rem;
		background-position: right center;
	}
	.center {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		text-align: center;
	}
	.center > p {
		height: .6rem;
		line-height: .76rem;
		font-size: .36rem;
	}
	.center > span {
		display: block;
		font-size: .2rem;
		height: .4rem;
		line-height: .3rem;
	}
	.right {
		position: absolute;
		top: 0;
		right: 0;
		width: 2rem;
		height: 100%;
		z-index: 2;
	}
	.right > b {
		display: block;
		float: right;
		width: .7rem;
		height: 1rem;
		background-image: url('../../assets/img/user3.png');
		background-repeat: no-repeat;
		background-size: .48rem .48rem;
		background-position: center;
	}
	.right > b:nth-child(2) {
		background-image: url('../../assets/img/phone.png');
	}
	.right > b:nth-child(1) {
		margin-right: .1rem;
	}
</style>