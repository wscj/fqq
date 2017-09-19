<template>
	<div class="search" @click="clickEvent">
		<div class="input">
			<b></b>
			<div class="text">{{ text }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'search',
	data () {
		return {
			text: '搜索'
		}
	},
	props: ['clickEvent'],
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.search {
		display: flex;
		padding: px2rem(24px) px2rem(42px);
		background-color: #fff;
	}
	.input {
		flex: 1;
		height: px2rem(99px);
		background-color: #f3f3f3;
		border: none;
		border-radius: px2rem(15px);
		font-size: px2rem(42px);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.text {
		color: #a6a6a6;
		font-family: 'Microsoft YaHei';
		font-size: px2rem(42px);
	}
	b {
		width: px2rem(63px);
		height: px2rem(63px);
		margin-right: px2rem(12px);
		background: url('../../assets/img/search.png') no-repeat;
		background-size: px2rem(54px);
		background-position: center;
	}
</style>