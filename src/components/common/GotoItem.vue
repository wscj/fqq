<template>
	<div class="goto-item">
		<div v-if="icon"></div>
		<p>{{ text }}</p>
		<b></b>
	</div>
</template>

<script>
export default {
	name: 'gotoItem',
	data () {
		return {
			text: '新朋友',
			icon: ''
		}
	}
}
</script>

<style scoped>
	.goto-item {
		display: flex;
		height: .8rem;
		background-color: #fff;
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