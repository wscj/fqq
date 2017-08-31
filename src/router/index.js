import Vue from 'vue'
import Router from 'vue-router'
import MainPanel from '@/components/MainPanel'
import ShowPanel from '@/components/ShowPanel'
import MsgList from '@/components/sub-main/MsgList'
import Contacts from '@/components/sub-main/Contacts'
import Dynamic from '@/components/sub-main/Dynamic'
import FriendsList from '@/components/sub-main/FriendsList'
import Login from '@/components/Login'
import Setting from '@/components/sub-show/Setting'
import NoTransitionPanel from '@/components/NoTransitionPanel'
import SearchPage from '@/components/sub-no-trans/SearchPage'
import Conversation from '@/components/sub-show/Conversation'

import Temp from '@/components/Temp'

Vue.use(Router)

const router = new Router({
	routes: [{
        path: '/login',
        component: Login,
    }, {
		path: '/',
        name: 'main',
		component: MainPanel,
        meta: { requiresAuth: true },
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
        }],
    }, {
        path: '/show-panel',
        component: ShowPanel,
        meta: { requiresAuth: true },
        children: [{
            path: '/',
            component: Setting
        }, {
            path: '/show-panel/conversation',
            component: Conversation
        }]
    }, {
        path: '/no-transition-panel',
        component: NoTransitionPanel,
        meta: { requiresAuth: true },
        children: [{
            path: '/',
            component: SearchPage
        }]
	}]
});

router.beforeEach((to, from, next) => {
    if (to.matched[0] && to.matched[0].meta.requiresAuth) {
        if (!localStorage.token) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
        else {
            next();
        }
    }
    else {
        next();
    }
});

export default router