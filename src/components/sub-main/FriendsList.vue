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
	activated () {
		this.getData();
	},
	methods: {
		getData: function() {
			this.$http.get('/getFriendList')
				.then(resp => {
					if (toString.call(resp.data.list) === '[object Array]') {
						this.groups = resp.data.list
					}
				});
		}
	}
}
</script>

<style scoped>
</style>