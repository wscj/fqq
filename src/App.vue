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
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
export default {
	data () {
		return {
			transitionName: 'slide-right',
			modeName: 'out-in'
		}
	},
	methods: {
		beforeEnter: function(el) {
		},
		enter: function(el, done) {
			if (el.getAttribute('name') === 'show-panel') {
				setTimeout(function() {
					el.style.left = '0';
					done();
				}, 0)
			}
			else {
				setTimeout(function() {
					el.lastChild.style.left = '0';
					done();
				}, 10)
			}
		},
		afterEnter: function(el) {
		},
		beforeLeave: function(el) {

		},
		leave: function(el, done) {

			if (el.getAttribute('name') === 'show-panel') {
				el.style.left = '7.2rem';
				setTimeout(function() {
					done();
				}, 250);
			}
			else {
				el.lastChild.style.left = '-7.2rem';
				setTimeout(function() {
					done();
				}, 250);
			}
		},
		afterLeave: function(el) {
		}
	}
}
</script>

<style scoped>
</style>
