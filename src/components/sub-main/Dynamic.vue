<template>
	<div class="dynamic">
		<input type="button" value="Loading"  @click="click">
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
			this.$store.commit('setLoading', { onShow: true });
			setTimeout(() => {
				this.$store.commit('setLoading', { onShow: false });
			}, 2000);
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.dynamic {
		font-size: px2rem(90px);
		text-align: center;
		margin-top: px2rem(30px);
	}
	input {
		width: px2rem(400px);
		height: px2rem(120px);
		font-size: px2rem(52px);
		border-radius: px2rem(16px);
		border: none;
	}
</style>