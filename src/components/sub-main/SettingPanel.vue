<template>
	<div class="setting-panel">
		<div class="top">
			<div class="qr-code">
				<img src="/static/img/qr_code.png">
			</div>
			<div class="top-center">
				<img src="/static/img/avatar.jpg">
				<span>Q昵称</span>
			</div>
			<div class="top-bottom">
				<div>
					<img src="/static/img/star.png">
					<img src="/static/img/star.png">
					<img src="/static/img/star.png">
				</div>
				<p>做自己喜欢做的事</p>
			</div>
		</div>
		<div class="center">
		</div>
		<div class="bottom">
			<i class="temperature">31°</i>
			<div class="toolbar">
				<div class="setting"><b></b><span>设置</span></div>
				<div class="moon"><b></b><span>夜间</span></div>
				<div>广州市</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	}
}
</script>

<style scoped>
	.setting-panel {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.top {
		height: 3.8rem;
		background: url('/static/img/bg1.jpg') no-repeat;
		background-size: 100% 100%;
	}
	.qr-code {
		height: 1.6rem;
		position: relative;
	}
	.qr-code img {
		width: .6rem;
		position: absolute;
		top: .46rem;
		right: .3rem;
	}
	.top-center {
		display: flex;
		padding-left: .36rem;
	}
	.top-center img {
		width: .8rem;
		height: .8rem;
		border-radius: 50%;
		border: 3px solid #fff;
	}
	.top-center span {
		color: #fff;
		font-size: .6rem;
		padding-left: .3rem;
	}
	.top-bottom {
		padding: .12rem 0 0 .36rem;
	}
	.top-bottom img {
		width: .34rem;
	}
	.top-bottom p {
		color: #fff;
		font-size: .28rem;
	}
	.center {
		flex: 1;
		position: relative;
	}
	.temperature {
		display: block;
		text-align: right;
		font-size: .8rem;
		color: #12b7f5;
		padding: 0 .2rem;				
		margin-bottom: .1rem;
	}
	.bottom {
		height: 2.1rem;
	}
	.toolbar {		
		display: flex;
	}
	.toolbar > div {
		flex: 1;
		text-align: center;
		font-size: .32rem;
		color: #232323;
	}
	.toolbar > div {
		display: flex;
		justify-content: center;
	}
	.toolbar > div > b {
		display: block;
		width: .47rem;
		height: .47rem;
		float: left;
		background-size: .46rem;
	}
	.toolbar > div > span {
		display: block;
		float: left;
		margin-left: .1rem
	}
	.setting b {
		background: url('/static/img/setting.png') no-repeat;
	}
	.moon b {
		background: url('/static/img/moon.png') no-repeat;
		background-size: .42rem !important;
	}
</style>