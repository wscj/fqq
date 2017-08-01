import Vue from 'vue'
import Router from 'vue-router'
import MainPanel from '@/components/MainPanel'
import ShowPanel from '@/components/ShowPanel'
import MsgList from '@/components/sub-main/MsgList'
import Contacts from '@/components/sub-main/Contacts'
import Dynamic from '@/components/sub-main/Dynamic'
import FriendsList from '@/components/sub-main/FriendsList'
import Login from '@/components/Login'

import Temp from '@/components/Temp'

Vue.use(Router)


const router = new Router({
	routes: [{
		path: '/msg',
		component: MainPanel,
		children:[{
            path: '/',
            component: MsgList
        }, {
            path: '/msg/contacts',
            component: Contacts,
            children: [{
            	path: '/',
            	component: FriendsList
            }]
        }, {
            path: '/msg/dynamic',
            component: Dynamic
        }]
    }, {
        path: '/show-panel',
        component: ShowPanel,
    }, {
        path: '/',
        component: Login,
	}]
});

export default router