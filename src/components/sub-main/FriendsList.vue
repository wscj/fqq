<template>
	<ul>
		<li v-for="group in groups">
			<v-group :group-name="group.name" :online-count="group.onlineCount"></v-group>
		</li>
	</ul>
</template>

<script>
import Group from '../common/Group';

export default {
	data () {
		return {
			groups: [{
				name: '特别关心',
				onlineCount: '3/3',
				friends: [{
					name: '张三',
					sex: 1,
					account: '123888',
					signature: '2017加油！！！'
				}, {
					name: '李四',
					sex: 1,
					account: '123889',
					signature: '好好学习天天向上'
				}]
			}, {
				name: '我的好友',
				onlineCount: '56/128',
				friends: []
			}, {
				name: '同学', 
				onlineCount: '279/323',
				friends: []
			}]
		}
	},
	components: {
		vGroup: Group
	}
}
</script>

<style scoped>
</style>