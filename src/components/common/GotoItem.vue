<template>
	<div class="goto-item" @click="click">
		<div v-if="icon"></div>
		<p>{{ text }}</p>
		<b v-if="!hasGotoIcon"></b>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	props: ['text', 'icon', 'hasGotoIcon'],
	methods: {
		click: function() {
			this.$emit('itemClick')
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.goto-item {
		display: flex;
		height: px2rem(120px);
		background-color: #fff;
		border-bottom: 1px solid #e6e6e6;
	}
	p {
		flex: 1;
		font-size: px2rem(48px);
		color: #000;
		line-height: px2rem(120px);
		margin-left: px2rem(60px);
	}
	b {
		display: block;
		height: 100%;
		width: px2rem(102px);
		background: url('../../assets/img/right.png') no-repeat;
		background-position: center;
		background-size: px2rem(42px);
	}
</style>