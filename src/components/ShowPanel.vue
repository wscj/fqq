<template>
	<div name="show-panel" class="show-panel">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data () {
		return {}
	}
}
</script>

<style scoped>
	.show-panel {
		position: fixed;
		top: 0;
		left: 7.2rem;
		width: 100%;
		height: 100%;
		transition: left 250ms;
		z-index: 10;
	}
</style>
