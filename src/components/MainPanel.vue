<template>
	<div class="panel">
		<div class="info-panel" :name="show">
			<v-setting-panel></v-setting-panel>
		</div>
		<div class="shade" :name="show" @click="show = ''"></div>
		<div class="main-panel" :name="show">
			<v-header :parentData="headerData" @avatarClick="showMe"></v-header>
			<div class="main-div">
				<transition :name="transitionName" mode="out-in">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</transition>
			</div>
			<v-footer @changePage="setHeader"></v-footer>
		</div>
	</div>
</template>

<script>
import header from './sub-main/Header.vue';
import footer from './sub-main/Footer.vue';
import SettingPanel from './sub-main/SettingPanel.vue';
export default {
	data () {
		return {
			transitionName: 'slide-left',
			headerData: {
				title: '消息',
				page: 'msg'
			},
			show: ''
		}
	},
	components: {
		vHeader: header,
		vFooter: footer,
		vSettingPanel: SettingPanel
	},
	watch: {
		'$route' (to, from) {
			this.transitionName = (to.path === '/' || (to.path === '/contacts' && from.path === '/dynamic')) ? 
				'slide-left' : 'slide-right';
		}
	},
	methods: {
		setHeader: function(page) {
			switch (page) {
			case 'msg':
				this.headerData = {
					title: '消息',
					page: 'msg'
				}
				break;
			case 'contacts':
				this.headerData = {
					title: '联系人',
					page: 'contacts'
				}
				break;
			case 'dynamic':
				this.headerData = {
					title: '动态',
					page: 'dynamic'
				}
				break;
			}
		},
		showMe: function() {
			this.show = 'show';
		}
	},
	created () {
		// console.log('main created');
	}
}
</script>

<style scoped>
	.info-panel {
		position: fixed;
		height: 100%;
		width: 5.6rem;
		left: -5.6rem;
		z-index: 2;
		transition: left 250ms;
		background-color: #fff;
	}
	.info-panel[name=show] {
		left: 0;
	}
	.main-panel {
		position: fixed;
		left: 0;
		height: 100%;
		width: 100%;
		transition: left 250ms;
		display: flex;
		flex-direction: column;
	}
	.main-div {
		flex: 1;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.main-panel[name=show] {
		left: 5.6rem !important;
	}
	.shade {
		opacity: 0;
		transition: opacity 250ms;
	}
	.shade[name=show] {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .36);
		opacity: 1;
		z-index: 1;
	}
	.slide-right-enter-active,
	.slide-left-enter-active {
		transition: all .2s;
	}
	.slide-left-enter {
		transform: translateX(-7.2rem);
		opacity: 0;
	}
	.slide-right-enter {
		transform: translateX(7.2rem);
		opacity: 0;
	}
</style>