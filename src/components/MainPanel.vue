<template>
	<v-header></v-header>
</template>

<script>
import header from './sub-main/header.vue';
export default {
	name: 'showPanel',
	data () {
		return {
			msg: 'Show Panel'
		}
	},
	components: {
		vHeader: header
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.show-panel {
		font-size: .6rem;
	}
</style>
