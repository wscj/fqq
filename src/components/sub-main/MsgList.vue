<template>
	<div>
		<v-search></v-search>
		<ul>
			<li v-for="chat in chats">
				<v-msg-item :chatInfo="chat"></v-msg-item>
			</li>
		</ul>
	</div>
</template>

<script>
import search from '../common/Search';
import msgItem from '../common/MsgItem';
export default {
	data () {
		return {
			chats: []
		}
	},
	components: {
		vSearch: search,
		vMsgItem: msgItem
	},
	created () {
		this.getData();
	},
	methods: {
		getData: function() {
			this.$http.get('/getMsgList').then(
				(resp) => {
					if (toString.call(resp.body.list) === '[object Array]') {
						this.chats = resp.body.list
					}
				},
				(resp) => {
					console.error(resp);
				}
			)
		}
	}
}
</script>

<style scoped>
</style>