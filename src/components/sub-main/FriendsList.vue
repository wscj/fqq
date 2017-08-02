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
			groups: []
		}
	},
	components: {
		vGroup: Group
	},
	created () {
		this.getData();
	},
	methods: {
		getData: function() {
			this.$http.get('/getFriendList').then(
				(resp) => {
					if (toString.call(resp.body.list) === '[object Array]') {
						this.groups = resp.body.list
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