export default {
	showSidebar: state => state.sidebar = 'show',
	hideSidebar: state => state.sidebar = '',
	setUser: (state, payload) => {
	  	state.user = payload;
	},
	setLoading: (state, { onShow, text }) => {
	  	state.loading.show = !!onShow;
	  	state.loading.text = text || '加载中...';
	}
}