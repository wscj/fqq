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

<style scoped>
	.search-page {
		background: #fff;
	}
	.search-bar {
		display: flex;
		padding: .14rem 0;
	}
	.input-c {
		flex: 1;
		position: relative;
		padding-left: .2rem;
	}
	.input-c input {
		width: calc(100% - .4rem);
		height: 100%;
		background: #f3f3f3;
		border: none;
		border-radius: .08rem;
		font-size: .3rem;
		text-indent: .56rem;
		padding: 0 .2rem;
	}
	.input-c input::placeholder {
		color: #a6a6a6;
	}
	.input-c b {
		width: .66rem;
		height: .66rem;
		margin-right: .08rem;
		background: url('../../assets/img/search.png') no-repeat;
		background-size: .36rem;
		background-position: center;
		position: absolute;
		top: 0;
		left: .28rem;
	}
	.btn-cancel {
		width: 1.4rem;
		height: .66rem;
		font-size: .3rem;
		background: #fff;
		border: none;
		color: #00a5e0;
	}
	h4 {
		background: #fff;
		font-size: .28rem;
		color: #848484;
		margin-left: .2rem;
		padding: .1rem 0rem;
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
		margin: .2rem 0;
		border-left: 1px solid #ddd;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.classify > div:nth-child(1) {
		border: none;
	}
	.classify > div > span {
		font-size: .28rem;
		margin-left: .04rem;
	}
	.classify > div > b {
		display: inline-block;
		width: .4rem;
		height: .4rem;
		font-size: .28rem;
		background-size: .4rem;
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