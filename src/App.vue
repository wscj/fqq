<template>
	<div id="app">
		<transition 
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			:css="false">
			<keep-alive include='mainPanel'>
				<router-view></router-view>
			</keep-alive>
		</transition>
		<v-loading v-show="this.$store.state.loading.show"></v-loading>
		<v-prompt v-if="this.$store.state.prompt.show"></v-prompt>
		<v-tip v-show="this.$store.state.tip.show"></v-tip>
	</div>
</template>

<script>
import vLoading from './components/common/Loading';
import vPrompt from './components/common/Prompt';
import vTip from './components/common/Tip';
export default {
	data () {
		return {
			trans: true, //控制切换是否需要动画
			mode: true, // 动画方向　true:　新窗口从右侧进入　false: 新窗口从左侧进入
		}
	},
	watch: {
		'$route' (to, from) {
			//showPanel与其他窗口的切换需要动画
			const onlyOneShowPanel = (from.path.indexOf('show-panel') > -1) ^ (to.path.indexOf('show-panel') > -1);
			//login与其他窗口的切换需要动画
			const onlyOneLogin = (from.path.indexOf('login') > -1) ^ (to.path.indexOf('login') > -1);
			this.trans = onlyOneShowPanel || onlyOneLogin;
			this.mode = (to.path.indexOf('show-panel') > -1) || (to.path.indexOf('login') > -1);
		}
	},
	methods: {
		beforeEnter: function(el) {},
		enter: function(el, done) {
			done();
		},
		afterEnter: function(el) {
			if (this.trans) {
				const left = this.mode ? '7.2rem' : '-7.2rem';
				el.style.left = left;
				this.trans && Velocity(el, { left: '0rem' }, { duration: 250, easing: 'ease' });
			}
		},
		beforeLeave: function(el) {},
		leave: function(el, done) {
			if (this.trans) {
				el.style.left = '0rem';
				const left = this.mode ? '-7.2rem' : '7.2rem';
				Velocity(el, { left: left }, { duration: 250, complete: done, easing: 'ease' });
			} else {
				done();
			}
		},
		afterLeave: function(el) {}
	},
	components: {
		vLoading,
		vPrompt,
		vTip
	}
}
</script>

<style scoped>
</style>
