import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Resource)

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
