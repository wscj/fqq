import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sidebar: '',
    user: {},
    loading: {
      show: false,
      text: '加载中...'
    },
    prompt: {
    	show: false,
    	text: '是否继续',
    	btns: ['是', '否']
    }
  },
  mutations
});

export default store