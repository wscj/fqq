<template>
	<div class="search-page">
		<div class="search-bar">
			<div class="input-c">
				<b></b>
				<input type="text" placeholder="搜索" name="search" />
			</div>
			<input type="button" value="取消" class="btn-cancel"@click="back" >
		</div>
		<h4>快捷搜索</h4>
		<div class="classify">
			<div class="dynamic"><b></b><span>好友动态</span></div>
			<div class="article"><b></b><span>文章</span></div>
			<div class="official"><b></b><span>公众号</span></div>
		</div>
	</div>
</template>

<script>
export default {
	mounted () {
		this.$el.querySelector('input[name=search]').focus();
	},
	methods: {
		back () {
			this.$router.back();
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.search-page {
		background: #fff;
	}
	.search-bar {
		display: flex;
		padding: px2rem(21px) 0;
	}
	.input-c {
		flex: 1;
		position: relative;
		padding-left: px2rem(30px);
	}
	.input-c input {
		width: calc(100% - .4rem);
		height: 100%;
		background: #f3f3f3;
		border: none;
		border-radius: px2rem(12px);
		font-size: px2rem(45px);
		text-indent: px2rem(84px);
		padding: 0 px2rem(30px);
	}
	.input-c input::placeholder {
		color: #a6a6a6;
	}
	.input-c b {
		width: px2rem(99px);
		height: px2rem(99px);
		margin-right: px2rem(12px);
		background: url('../../assets/img/search.png') no-repeat;
		background-size: px2rem(54px);
		background-position: center;
		position: absolute;
		top: 0;
		left: px2rem(42px);
	}
	.btn-cancel {
		width: px2rem(210px);
		height: px2rem(99px);
		font-size: px2rem(45px);
		background: #fff;
		border: none;
		color: #00a5e0;
	}
	h4 {
		background: #fff;
		font-size: px2rem(42px);
		color: #848484;
		margin-left: px2rem(30px);
		padding: px2rem(15px) px2rem(0px);
		border-bottom: 1px solid #ddd;
	}
	.classify {
		display: flex;
		border-bottom: 1px solid #ddd;
	}
	.classify > div {
		flex: 1;
		text-align: center;
		font-size: 0;
		margin: px2rem(30px) 0;
		border-left: 1px solid #ddd;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.classify > div:nth-child(1) {
		border: none;
	}
	.classify > div > span {
		font-size: px2rem(42px);
		margin-left: px2rem(6px);
	}
	.classify > div > b {
		display: inline-block;
		width: px2rem(60px);
		height: px2rem(60px);
		font-size: px2rem(42px);
		background-size: px2rem(60px);
	}
	.dynamic > b {
		background: url('../../assets/img/qzone2.png') no-repeat;
	}
	.article > b {
		background: url('../../assets/img/article.png') no-repeat;
	}
	.official > b {
		background: url('../../assets/img/official_account.png') no-repeat;
	}
</style>