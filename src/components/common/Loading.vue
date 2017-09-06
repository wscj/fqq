<template>
	<div class="loading">
		<div class="container">
			<div class="loader">
				<div class="loader-inner ball-scale-multiple">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<p>{{ this.$store.state.loading.text }}</p>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.loading {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .6);
		z-index: 999;
		display: flex;
		align-items: center;
		.container {
			height: px2rem(200px);
			width: 100%;
			p {
				color: #eee;
				text-align: center;
				letter-spacing: 2px;
			}
		}
	}

	.loader {
		margin: 0 auto;
		box-sizing: border-box;
		display: flex;
		flex: 0 1 auto;
		flex-direction: column;
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: 25%;
		max-width: 25%;
		height: 120px;
		align-items: center;
		justify-content: center;
		.ball-scale-multiple {
			position: relative;
			transform: translateY(-30px);
		}
	}

	.ball-scale-multiple>div:nth-child(2) {
	    -webkit-animation-delay: -0.4s;
	    animation-delay: -0.4s;
	}

	.ball-scale-multiple>div:nth-child(3) {
	    -webkit-animation-delay: -0.2s;
	    animation-delay: -0.2s;
	}

	.ball-scale-multiple>div {
	    background-color: #fff;
	    border-radius: 100%;
	    margin: 2px;
	    -webkit-animation-fill-mode: both;
	    animation-fill-mode: both;
	    position: absolute;
	    left: -30px;
	    top: 0px;
	    opacity: 0;
	    margin: 0;
	    width: 60px;
	    height: 60px;
	    -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
	    animation: ball-scale-multiple 1s 0s linear infinite;
	}
	@keyframes ball-scale-multiple {
	    0% {
	        -webkit-transform: scale(0);
	        transform: scale(0);
	        opacity: 0;
	    }
	    5% {
	        opacity: 1;
	    }
	    100% {
	        -webkit-transform: scale(1);
	        transform: scale(1);
	        opacity: 0;
	    }
	}
</style>