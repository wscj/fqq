import Vue from 'vue'
import Router from 'vue-router'
import MainPanel from '@/components/MainPanel'
import ShowPanel from '@/components/ShowPanel'
import MsgList from '@/components/sub-main/MsgList'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/aa',
		name: 'MainPanel',
		component: MainPanel,
		subRoutes: {
			path: '/msg-list',
			name: 'MsgList',
			component: MsgList
		}
	}, {
		path: '/show-panel',
		name: 'ShowPanel',
		component: ShowPanel,
		// subRoutes: {
		// 	'/a': {
		// 		component: MsgList
		// 	}
		// }
	}]
})
