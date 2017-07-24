<template>
	<div>
		<v-header></v-header>
		<div class="temp">
			<router-link to="/">aaa</router-link>
			<router-link to="/contacts">bbb</router-link>
			<router-link to="/news">ccc</router-link>
		</div>
		<router-view></router-view>
	</div>
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
	.temp {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.temp > a {
		display: block;
		flex: 1;
		font-size: .4rem;
		text-align: center;
	}
</style>
