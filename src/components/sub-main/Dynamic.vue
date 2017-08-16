<template>
	<div class="dynamic" @click="click">
		Dynamic
	</div>
</template>

<script>
export default {
	name: 'dynamic',
	data () {
		return {
			msg: 'dynamic'
		}
	},
	methods: {
		click () {
			
		}
	}
}
</script>

<style scoped>
	.dynamic {
		font-size: .6rem;
		text-align: center;
		margin-top: .2rem;
	}
</style>