import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import store from './store'
import fn from './assets/js/fn'
import 'velocity-animate' // 引入进来直接生成全局函数Velocity，可在所有组件中使用

Vue.config.productionTip = false;
Vue.use(Resource);
Vue.use(fn);

//在发送http时带上token验证信息
Vue.http.interceptors.push(function(request, next) {

  // modify method
  // request.method = 'POST';
  request.headers.set('x-access-token', localStorage.token);

  // continue to next interceptor
  next(function(response) {
    //token校验失败，服务器拒绝
    if (response.status === 403) {
    	this.$router.push({
    		path: '/login',
    		query: {
    			redirect: this.$route.fullPath
    		}
    	});
    }
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
