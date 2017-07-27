<template>
	<div class="msg-list">
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
			chats: [{
				name: '猴子',
				account: '6664',
				lastTime: '9:35',
				lastMsg: '嗯嗯'
			}, {
				name: '西瓜',
				account: '6662',
				lastTime: '15:12',
				lastMsg: '敲代码去，我在自己搞个vue.js的项目来玩，不然老学不到这些新的技术'
			}, {
				name: '666',
				account: '6661',
				lastTime: '昨天',
				lastMsg: '明天记得带过来，可能会下大暴雨啊'
			}, {
				name: '圆头',
				account: '6663',
				lastTime: '昨天',
				lastMsg: '是的，就是这么6'
			}, {
				name: '动感超人',
				account: '6665',
				lastTime: '昨天',
				lastMsg: '[好咧]'
			}]
		}
	},
	components: {
		vSearch: search,
		vMsgItem: msgItem
	}
}
</script>

<style scoped>
	.msg-list {
		font-size: .6rem;
		text-align: center;
	}
</style>