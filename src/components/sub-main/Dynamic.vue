<template>
	<div class="dynamic">
		<input type="button" value="等待窗口"  @click="loadding">
		<input type="button" value="上传文件"  @click="upload">
		<input type="file" name="upload" @change="uploadChange">
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
		loadding () {
			this.$store.commit('setLoading', { onShow: true });
			setTimeout(() => {
				this.$store.commit('setLoading', { onShow: false });
			}, 2000);
		},
		upload () {
			this.$el.querySelector('input[name=upload]').click();
		},
		uploadChange (event) {
			let file = event.target.files[0];
			if (file) {
				const formData = new FormData();
				formData.append('file', file);
				this.$http.post('/upload', formData).then(
					(resp) => {
						console.log('success', resp);
					},
					(resp) => {
						console.log('fail', resp);
					}
				)
			}
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
	input[type=button] {
		width: px2rem(600px);
		height: px2rem(120px);
		font-size: px2rem(52px);
		border-radius: px2rem(16px);
		border: 1px solid #ccc;
	}
	input[type=file] {
		display: none;
	}
</style>