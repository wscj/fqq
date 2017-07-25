import Vue from 'vue'
import Router from 'vue-router'
import MainPanel from '@/components/MainPanel'
import ShowPanel from '@/components/ShowPanel'
import MsgList from '@/components/sub-main/MsgList'
import Contacts from '@/components/sub-main/Contacts'
import Dynamic from '@/components/sub-main/Dynamic'
import FriendsList from '@/components/sub-main/FriendsList'

import Temp from '@/components/Temp'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		component: MainPanel,
		children:[{
            path: '/',
            component: MsgList
        }, {
            path: '/contacts',
            component: Contacts,
            children: [{
            	path: '/',
            	component: FriendsList
            }]
        }, {
            path: '/dynamic',
            component: Dynamic
        }]
	}, {
		path: '/show-panel',
		component: ShowPanel,
	}]
})
