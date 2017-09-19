<template>
	<div class="setting-panel">
		<div class="top">
			<div class="qr-code">
				<img src="/static/img/qr_code.png">
			</div>
			<div class="top-center">
				<img :src="'/static/img/' + this.$store.state.user.account + '.jpg'">
				<span>{{ this.$store.state.user.name }}</span>
			</div>
			<div class="top-bottom">
				<div>
					<img src="/static/img/star.png">
					<img src="/static/img/star.png">
					<img src="/static/img/star.png">
				</div>
				<p>{{ this.$store.state.user.signature }}</p>
			</div>
		</div>
		<div class="center">
		</div>
		<div class="bottom">
			<i class="temperature">31°</i>
			<div class="toolbar">
				<div class="setting" @click="set"><b></b><span>设置</span></div>
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
	},
	methods: {
		set: function() {
			this.$router.push('/show-panel');
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.setting-panel {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.top {
		height: px2rem(570px);
		background: url('/static/img/bg1.jpg') no-repeat;
		background-size: 100% 100%;
	}
	.qr-code {
		height: px2rem(240px);
		position: relative;
	}
	.qr-code img {
		width: px2rem(90px);
		position: absolute;
		top: px2rem(69px);
		right: px2rem(45px);
	}
	.top-center {
		display: flex;
		padding-left: px2rem(54px);
	}
	.top-center img {
		width: px2rem(120px);
		height: px2rem(120px);
		border-radius: 50%;
		border: 3px solid #fff;
	}
	.top-center span {
		color: #fff;
		font-size: px2rem(90px);
		padding-left: px2rem(45px);
	}
	.top-bottom {
		padding: px2rem(18px) 0 0 px2rem(54px);
	}
	.top-bottom img {
		width: px2rem(51px);
	}
	.top-bottom p {
		color: #fff;
		font-size: px2rem(42px);
	}
	.center {
		flex: 1;
		position: relative;
	}
	.temperature {
		display: block;
		text-align: right;
		font-size: px2rem(120px);
		color: #12b7f5;
		padding: 0 px2rem(30px);				
		margin-bottom: px2rem(15px);
	}
	.bottom {
		height: px2rem(315px);
		display: flex;
		flex-direction: column;
	}
	.toolbar {		
		display: flex;
		flex: 1;
	}
	.toolbar > div {
		flex: 1;
		text-align: center;
		font-size: px2rem(48px);
		color: #232323;
	}
	.toolbar > div {
		display: flex;
		justify-content: center;
	}
	.toolbar > div > b {
		display: block;
		width: px2rem(70px);
		height: px2rem(70px);
		float: left;
		background-size: px2rem(69px);
	}
	.toolbar > div > span {
		display: block;
		float: left;
		margin-left: px2rem(15px);
	}
	.setting b {
		background: url('/static/img/setting.png') no-repeat;
	}
	.moon b {
		background: url('/static/img/moon.png') no-repeat;
		background-size: px2rem(63px) !important;
	}
</style>