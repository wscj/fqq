import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions'

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
    	text: '',
    	btns: []
    },
    tip: {
      show: false,
      text: ''
    },
    pullRefresh: {
      text: '下拉刷新',
      height: 0,
      hasRotate: false,
      hasLoading: false,
      hasSuccess: false,
    }
  },
  mutations,
  actions
});

export default store