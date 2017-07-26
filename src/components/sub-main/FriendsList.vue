<template>
	<ul>
		<li v-for="group in groups">
			<v-group :groupInfo="group"></v-group>
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
				onlineCount: '2/3',
				friends: [{
					name: '猴子',
					sex: 1,
					account: '6664',
					signature: '2017加油！！！',
					state: '手机在线'
				}, {
					name: '西瓜',
					sex: 1,
					account: '6662',
					signature: '好好学习 | 天天向上',
					state: '4G在线'
				}, {
					name: '666',
					sex: 1,
					account: '6661',
					signature: '做个美男子',
					state: '离线'
				}, {
					name: '666',
					sex: 1,
					account: '6661',
					signature: '做个美男子',
					state: '离线'
				}, {
					name: '666',
					sex: 1,
					account: '6661',
					signature: '做个美男子',
					state: '离线'
				}, {
					name: '666',
					sex: 1,
					account: '6661',
					signature: '做个美男子',
					state: '离线'
				}, {
					name: '666',
					sex: 1,
					account: '6661',
					signature: '做个美男子',
					state: '离线'
				}, {
					name: '666',
					sex: 1,
					account: '6661',
					signature: '做个美男子',
					state: '离线'
				}, {
					name: '666',
					sex: 1,
					account: '6661',
					signature: '做个美男子',
					state: '离线'
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