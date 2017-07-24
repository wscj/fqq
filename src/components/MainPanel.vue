<template>
	<div>
		<v-header></v-header>
		<router-view></router-view>
		<v-footer></v-footer>
	</div>
</template>

<script>
import header from './sub-main/header.vue';
import footer from './sub-main/footer.vue';
export default {
	name: 'mainPanel',
	data () {
		return {
			msg: 'Main Panel'
		}
	},
	components: {
		vHeader: header,
		vFooter: footer
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.show-panel {
		font-size: .6rem;
	}
</style>
