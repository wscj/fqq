<template>
	<div class="pull-refresh">
		<div class="bottom">
			<b class="icon"></b>
			<div class="text-c">
				<span class="icon-success"></span>
				<span class="text">{{ this.$store.state.pullRefresh.text }}</span>
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
	computed: {
		height () {
			return this.$store.state.pullRefresh.height;
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.pull-refresh {
		max-height: px2rem(600px);
		background-color: #323232;
		position: relative;
		.bottom {
			width: px2rem(740px);
			height: px2rem(200px);
			position: absolute;
			bottom: 0;
			left: 50%;
			margin-left: px2rem(-370px);
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			.text-c {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				.text {
					color: #f3f3f3;
					font-size: px2rem(40px);
				}
			}
		}
		.icon {
			display: block;
			width: px2rem(100px);
			height: px2rem(100px);
			background: url('../../assets/img/pull.png') no-repeat;
			background-size: px2rem(100px) px2rem(100px);
			position: absolute;
			top: px2rem(50px);
			left: 0;
			transition: transform 150ms linear;
		}
		.rotate {
			transform: rotate(180deg);
		}
		.loading {
			background: url('../../assets/img/loading.gif') no-repeat;
			background-size: px2rem(100px) px2rem(100px);
			background-position: center;
		}
	}
	.success {
		.icon {
			background: #323232;
			position: relative;
		}
		.icon-success {
			width: px2rem(50px);
			height: px2rem(50px);
			margin-right: px2rem(24px);
			background: url('../../assets/img/success.png') no-repeat;
			background-size: px2rem(50px) px2rem(50px);
		}
	}
</style>