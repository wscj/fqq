<template>
	<div class="header">
		<div class="left" @click="leftClick">
			<span>返回</span>
		</div>
		<div class="center">{{ headerTitle }}</div>
		<div class="right"></div>
	</div>
</template>

<script>
export default {
	props: ['headerTitle'],
	methods: {
		leftClick: function() {
			this.$emit('leftClick');
		}
	}
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
	}
	.left {
		position: absolute;
		top: 0;
		left: 0;
		width: px2rem(225px);
		height: 100%;
		z-index: 2;
	}
	.left > span:before {
		content: '';
		display: block;
		width: px2rem(90px);
		height: px2rem(150px);
		float: left;
		background: url('../../assets/img/back.png') no-repeat;
		background-size: px2rem(75px);
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
		font-size: px2rem(54px);
	}
	.right {
		position: absolute;
		top: 0;
		right: 0;
		width: px2rem(300px);
		height: 100%;
		z-index: 2;
	}
</style>