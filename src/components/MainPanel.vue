<template>
	<div>
		<v-header></v-header>
		<!-- <transition name="fade" mode="out-in"> -->
			<router-view class="view"></router-view>
		<!-- </transition> -->
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
