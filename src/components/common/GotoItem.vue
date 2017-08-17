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

<style scoped>
	.goto-item {
		display: flex;
		height: .8rem;
		background-color: #fff;
		border-bottom: 1px solid #e6e6e6;
	}
	p {
		flex: 1;
		font-size: .32rem;
		color: #000;
		line-height: .8rem;
		margin-left: .4rem;
	}
	b {
		display: block;
		height: 100%;
		width: .68rem;
		background: url('../../assets/img/right.png') no-repeat;
		background-position: center;
		background-size: .28rem;
	}
</style>