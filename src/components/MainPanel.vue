<template>
	<div>
		<v-header :title="headerTitle"></v-header>
		<transition :name="transitionName" mode="out-in">
			<router-view class="main"></router-view>
		</transition>
		<v-footer @changePage="setHeader"></v-footer>
	</div>
</template>

<script>
import header from './sub-main/header.vue';
import footer from './sub-main/footer.vue';
export default {
	data () {
		return {
			transitionName: 'slide-left',
			headerTitle: '消息'
		}
	},
	components: {
		vHeader: header,
		vFooter: footer
	},
	watch: {
		'$route' (to, from) {
			if (to.path === '/') {
				this.transitionName = 'slide-left';
			}
			this.transitionName = (to.path === '/' || (to.path === '/contacts' && from.path === '/dynamic')) ? 
				'slide-left' : 'slide-right';
		}
	},
	methods: {
		setHeader: function(page) {
			switch (page) {
			case 'msg':
				this.headerTitle = '消息';
				break;
			case 'contacts':
				this.headerTitle = '联系人';
				break;
			case 'dynamic':
				this.headerTitle = '动态';
				break;
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.main {
		padding-top: 1rem;
	}
	.slide-right-enter-active,
	.slide-left-enter-active {
		transition: all .2s;
	}
	.slide-left-leave-active {
		/*transition: all .1s;*/
	}
	.slide-left-enter {
		transform: translateX(-7.2rem);
		opacity: 0;
	}
	.slide-left-leave-to {
		/*transform: translateX(-500px);*/
		/*opacity: 0;*/
	}
	.slide-right-enter {
		transform: translateX(7.2rem);
		opacity: 0;
	}
</style>
