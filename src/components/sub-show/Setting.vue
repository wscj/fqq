<template>
	<div>
		<v-header :headerTitle="'设置'" @leftClick="goback"></v-header>
	</div>
</template>

<script>
import Header from '../common/SimpleHeader';
export default {
	components: {
		vHeader: Header
	},
	methods: {
		goback: function() {
			console.log('go back');
		}
	}
}
</script>

<style scoped>
</style>