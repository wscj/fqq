
/**
 * 全局公用方法
 */
export default {
	install(Vue, options) {
		Vue.prototype.fn = {
			/**
			 * 弹出警告提示框，待完善
			 * @method warn
			 * @param  {string} msg 提示的消息文字
			 */
			warn: function(msg) {
				console.error(msg);
			},
			/**
			 * 跳到与好友的聊天窗口
			 * @param  {object} _this  Vue组件实例
			 * @param  {object} params 带有好友ID、姓名与帐号等信息
			 */
			gotoConversation: function(_this, params) {
				_this.$router.push({ 
					path: '/show-panel/conversation',
					query: { 
						friendID: params.friendID, 
						name: params.name,
						account: params.account
					}
				});
			}
		}
	}
}