export default {
	loadding ({ commit }, { onShow, text, time }) {
		commit('setLoading', { onShow: onShow, text: text });
		setTimeout(function() {
			commit('setLoading', { onShow: false });
		}, time)
	}
}