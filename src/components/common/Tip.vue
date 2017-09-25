<template>
	<div class="tip">
	    <div class="ui-success">
	        <svg viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Group-3" transform="translate(2.000000, 2.000000)">
                        <circle id="Oval-2" stroke="rgba(165, 220, 134, 0.2)" stroke-width="4" cx="41.5" cy="41.5" r="41.5"></circle>
                        <circle  class="ui-success-circle outline" id="Oval-2" stroke="#fff" stroke-width="4" cx="41.5" cy="41.5" r="41.5"></circle>
                        <polyline class="ui-success-path" id="Path-2" stroke="#fff" stroke-width="4" points="19 38.8036813 31.1020744 54.8046875 63.299221 28"></polyline>
                    </g>
                </g>
	        </svg>
	    </div>
	    <p class="text">{{ this.$store.state.tip.text }}</p>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.tip {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		.ui-success {
			width: px2rem(210px);
			height: px2rem(210px);
			margin: px2rem(450px) auto px2rem(90px);
		}
	}
	circle, polyline {
		fill: transparent;
		stroke: #fff;
		stroke-dasharray: 50000px;
		animation-name: outline;
		animation-duration: 10s;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
	}
	polyline {
		animation-delay: 600ms;
	}
	@keyframes outline {
		0% {
			stroke-dashoffset: 50000px;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}
	.text {
		color: #fff;
		font-size: px2rem(52px);
		text-align: center;
		animation-name: fade-in;
		animation-duration: 1000ms;
		animation-timing-function: linear;
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		60% {
			opacity: 1;
			font-size: px2rem(68px);
		}
		100% {}
	}
</style>