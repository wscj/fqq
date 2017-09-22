export default {
	/**
	 * 弹出与关闭等待窗口
	 * @param  {boolean} options.onShow 弹出还是关闭
	 * @param  {string} [options.text='']   等待窗口显示的提示文字
	 * @param  {number} [options.time=0]   弹出后到自动关闭的时间间隔，单位毫秒，０表示不自动关闭
	 */
	loadding ({ commit }, { onShow, text = '', time = 0 }) {
		commit('setLoading', { onShow: onShow, text: text });
		if (time) {
			setTimeout(function() {
				commit('setLoading', { onShow: false });
			}, time)
		}
	}
}