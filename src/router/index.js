import Vue from 'vue'
import Router from 'vue-router'
import MainPanel from '@/components/MainPanel'
import MsgList from '@/components/sub-main/MsgList'

// 以下组件通过路由懒加载的方式加载
const ShowPanel            = () => import('@/components/ShowPanel')
const Register             = () => import('@/components/Register')
const Login                = () => import('@/components/Login')
const Conversation         = () => import('@/components/sub-show/Conversation')
const SearchPage           = () => import('@/components/sub-no-trans/SearchPage')
const NoTransitionPanel    = () => import('@/components/NoTransitionPanel')
const Setting              = () => import('@/components/sub-show/Setting')
const FriendsList          = () => import('@/components/sub-main/FriendsList')
const Dynamic              = () => import('@/components/sub-main/Dynamic')
const Contacts             = () => import('@/components/sub-main/Contacts')

import store from '../store'

Vue.use(Router)

const router = new Router({
	routes: [{
        path: '/register',
        component: Register,
    }, {
        path: '/login',
        component: Login,
    }, {
		path: '/',
		component: MainPanel,
        meta: { requiresAuth: true },
		children:[{
            path: '/',
            component: MsgList
        }, {
            path: '/contacts',
            component: Contacts,
            children: [{
            	path: '/contacts/',
            	component: FriendsList
            }, {
                path: '/contacts/*',
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
            if (!Object.keys(store.state.user).length) {
                var user = JSON.parse(localStorage.user);
                store.commit('setUser', user);
            }
        }
    }
    else {
        next();
    }
});

export default router