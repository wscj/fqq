<template>
	<div class="search">
		<div class="input">
			<!-- <div> -->
				<b></b>
				<div class="text">{{ text }}</div>
			<!-- </div> -->
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
	}
}
</script>

<style scoped>
	.search {
		display: flex;
		padding: .16rem .28rem;
		background-color: #fff;
	}
	.input {
		flex: 1;
		height: .66rem;
		background-color: #f3f3f3;
		border: none;
		border-radius: .1rem;
		font-size: .28rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.text {
		color: #a6a6a6;
		font-family: 'Microsoft YaHei';
		font-size: .28rem;
		/*background-color: pink;*/
	}
	b {
		width: .42rem;
		height: .42rem;
		margin-right: .08rem;
		background: url('../../assets/img/search.png') no-repeat;
		background-size: .36rem;
		background-position: center;
		/*background-color: pink;*/
	}
</style>