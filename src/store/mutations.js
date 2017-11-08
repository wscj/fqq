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
	},
	setTip: (state, { onShow, text }) => {
	  	state.tip.show = !!onShow;
	  	state.tip.text = text || '';
	},
	setPullRefresh: (state, { text, height, hasRotate, hasLoading, hasSuccess }) => {
		if (typeof text === 'string')
			state.pullRefresh.text = text;

		if (typeof height === 'number')
			state.pullRefresh.height = height;

		if (typeof hasRotate !== 'undefined')
			state.pullRefresh.hasRotate = !!hasRotate;

		if (typeof hasLoading !== 'undefined')
			state.pullRefresh.hasLoading = !!hasLoading;

		if (typeof hasSuccess !== 'undefined')
			state.pullRefresh.hasSuccess = !!hasSuccess;
	}
}