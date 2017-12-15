import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fn from './assets/js/fn.js'
import 'velocity-animate' // 引入进来直接生成全局函数Velocity，可在所有组件中使用
import './assets/js/common/Date.js'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.http = Vue.prototype.$http = axios;
Vue.use(fn);
axios.bind(Vue);

// 为所有请求的头部带上token
axios.interceptors.request.use(function (config) {
  config.headers['x-access-token'] = localStorage.token;
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // token校验失败，服务器拒绝
  if (error.toString().indexOf('code 403') > -1) {
    this.$router.push({
      path: '/login',
      query: {
        redirect: this.$route.fullPath
      }
    });
    return;
  }
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});