import Vue from 'vue'
import Router from 'vue-router'
import MainPanel from '@/components/MainPanel'
import ShowPanel from '@/components/ShowPanel'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'MainPanel',
		component: MainPanel
	}, {
		path: '/show-panel',
		name: 'ShowPanel',
		component: ShowPanel
	}]
})
