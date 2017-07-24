import Vue from 'vue'
import Router from 'vue-router'
import MainPanel from '@/components/MainPanel'
import ShowPanel from '@/components/ShowPanel'
import Temp from '@/components/sub-main/Temp'
import Contacts from '@/components/sub-main/Contacts'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'MainPanel',
		component: MainPanel,
		children:[{
            path:'/',
            component: Temp
        }, {
            path:'/contacts',
            component: Contacts
        }]
	}, {
		path: '/show-panel',
		name: 'ShowPanel',
		component: ShowPanel
	}]
})
