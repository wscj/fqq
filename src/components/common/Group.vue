<template>
	<div>
		<div class="group">
			<b></b>
			<span>{{ groupName }}</span>
			<i>{{ onlineCount }}</i>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	props: ['groupName', 'onlineCount']
}
</script>

<style scoped>
	.group {
		display: flex;
		background-color: #fff;
	}
	.group b {
		width: .8rem;
		height: .8rem;
		background: url('../../assets/img/right.png') no-repeat;
		background-size: .3rem;
		background-position: center;
	}
	.group span {
		flex: 1;
		font-size: .3rem;
		color: #000;
		height: .8rem;
		line-height: .8rem;
	}
	.group i {
		font-style: normal;
		font-size: .26rem;
		color: #999;
		line-height: .8rem;
		padding: 0 .4rem;
	}
</style>