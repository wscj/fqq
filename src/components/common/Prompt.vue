<template>
	<div class="prompt" @click="cancel">
		<div class="container" >
			<p @click.stop="">{{ this.$store.state.prompt.text }}</p>
			<span v-for="btn in btns" @click.stop="exec">{{ btn.text }}</span>
			<div class="gap" @click.stop=""></div>
			<span>取消</span>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		btns () {
			return this.$store.state.prompt.btns;
		}
	},
	methods: {
		cancel () {
			this.$el.style.background = 'rgba(0, 0, 0, 0)';
			Velocity(
				this.$el.querySelector('.container'), 
				{ height: '0rem' }, 
				{ 
					duration: 200, 
					easing: 'linear',
					complete: () => {
						this.$store.commit('setPrompt', { onShow: false, text: '', btns: [] });
					}
				}
			);
		},
		exec (event) {
			for (let i = 0; i < this.btns.length; i++) {
				if (this.btns[i].text == event.target.innerText) {
					this.btns[i].fn();
					break;
				}
			}
			this.$store.commit('setPrompt', { onShow: false, text: '', btns: [] });
		},
	},
	mounted () {
		const container = this.$el.querySelector('.container');
		let height = container.offsetHeight;
		//转化为rem，其实不转直接用height也是可以的
		height = height / (document.documentElement.clientWidth / 360 * 3.125 * 16) + 'rem';
		container.style.height = 0;
		this.$el.style.background = 'rgba(0, 0, 0, .5)';
		Velocity(
			container, 
			{ height: height }, 
			{ 
				duration: 200, 
				easing: 'linear'
			}
		);
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.prompt {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		transition: background 200ms linear;
		z-index: 999;
		.container {
			position: absolute;
			bottom: 0;
			left: 0;
			background-color: #fff;
			width: 100%;
			text-align: center;
			> p {
				font-size: px2rem(38px);
				padding: px2rem(55px) px2rem(50px);
				color: #777;
			}
			> span {
				display: block;
				font-size: px2rem(54px);
				color: #444;
				border-top: 1px solid #dedfe0;
				padding: px2rem(45px) px2rem(50px);
			}
			> span:active {
				background-color: #eee;
			}
			.gap {
				height: px2rem(30px);
				background-color: #e5e3e4;
			}
		}
	}
</style>