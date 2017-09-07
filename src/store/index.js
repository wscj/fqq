import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
    setUser: (state, obj) => {
      state.user = obj;
    },
    setLoading: (state, obj) => {
      state.loading.show = !!obj.onShow;
      state.loading.text = obj.text || '加载中...';
    }
  }
});

export default store