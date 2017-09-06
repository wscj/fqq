import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import Vuex from 'vuex'
import fn from './assets/js/fn'

Vue.config.productionTip = false;
Vue.use(Resource);
Vue.use(Vuex);
Vue.use(fn);

//在发送http时带上token验证信息
Vue.http.interceptors.push(function(request, next) {

  // modify method
  // request.method = 'POST';
  request.headers.set('Authorization', localStorage.token);

  // continue to next interceptor
  next(function(response) {
    if (response.headers.map && response.headers.map.verify) {
    	this.$router.push({
    		path: '/login',
    		query: {
    			redirect: this.$route.fullPath
    		}
    	});
    }
  });
});

const store = new Vuex.Store({
  state: {
    sidebar: '',
    user: {},
    loading: {
      show: false,
      text: '加载中...'
    }
  },
  mutations: {
    showSidebar: state => state.sidebar = 'show',
    hideSidebar: state => state.sidebar = '',
    setUser: (state, obj, value) => {
      if (toString.call(obj) === '[object Object]') {
        state.user = obj;
      } else {
        state.user[obj] = value;
      }
    },
    setLoading: (state, onShow, text) => {
      state.loading.show = !!onShow;
      state.loading.text = text || '加载中...';
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
