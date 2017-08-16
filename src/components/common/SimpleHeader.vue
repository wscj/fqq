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
	data () {
		return {
			a: '3'
		}
	},
	props: ['headerTitle'],
	methods: {
		leftClick: function() {
			this.$emit('leftClick');
		}
	}
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
		font-size: .36rem;
	}
	.right {
		position: absolute;
		top: 0;
		right: 0;
		width: 2rem;
		height: 100%;
		z-index: 2;
	}
</style>