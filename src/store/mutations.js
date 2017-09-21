export default {
	showSidebar: state => state.sidebar = 'show',
	hideSidebar: state => state.sidebar = '',
	setUser: (state, payload) => {
	  	state.user = payload;
	},
	setLoading: (state, { onShow, text }) => {
	  	state.loading.show = !!onShow;
	  	state.loading.text = text || '加载中...';
	},
	setPrompt: (state, { onShow, text, btns }) => {
	  	state.prompt.show = !!onShow;
	  	state.prompt.text = text || '';
	  	state.prompt.btns = btns;
	}
}