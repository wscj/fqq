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
	</div>
</template>

<script>
import vLoading from './components/common/Loading';
import vPrompt from './components/common/Prompt';
export default {
	data () {
		return {
			trans: true //控制切换是否需要动画
		}
	},
	watch: {
		'$route' (to, from) {
			this.trans = (from.path.indexOf('show-panel') > -1) || (to.path.indexOf('show-panel') > -1);
		}
	},
	methods: {
		beforeEnter: function(el) {},
		enter: function(el, done) {
			done();
		},
		afterEnter: function(el) {
			this.trans && Velocity(el, { left: '0rem' }, { duration: 250, easing: 'ease' });
		},
		beforeLeave: function(el) {},
		leave: function(el, done) {
			if (this.trans) {
				const left = el.getAttribute('name') === 'show-panel' ? '7.2rem' : '-7.2rem';
				Velocity(el, { left: left }, { duration: 250, complete: done, easing: 'ease' });
			} else {
				done();
			}
		},
		afterLeave: function(el) {}
	},
	components: {
		vLoading,
		vPrompt
	}
}
</script>

<style scoped>
</style>
