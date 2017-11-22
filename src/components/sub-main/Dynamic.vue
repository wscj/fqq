<template>
	<div class="dynamic">
		<input type="button" value="等待窗口"  @click="loadding">
		<input type="button" value="提示窗口"  @click="prompt">
		<input type="file" name="upload" @change="uploadChange">
		<input type="button" value="上传文件"  @click="upload">
		<!-- <input type="button" value="test"  @click="test"> -->
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
		test () {
			// console.log(Velocity)
			// console.log(Resource,99)
		},
		loadding () {
			this.$store.dispatch('loadding', { onShow: true, text: '加载文字...', time: 1500 });
		},
		upload () {
			this.$el.querySelector('input[name=upload]').click();
		},
		uploadChange (event) {
			let file = event.target.files[0];
			if (!file) return;

			const data = { 
				onShow: true, 
				text: '你选取了新文件，是否立即上传？',
				btns: [{
					text: '上传', 
					fn: () => {
						const formData = new FormData();
						formData.append('file', file);
						this.$http.post('/upload', formData).then(
							(resp) => {
								this.$store.dispatch('tip', { onShow: true, text: '文件上传成功' });
							},
							(resp) => {
								console.log('fail', resp);
							}
						)
					}
				}]
			}
			this.$store.commit('setPrompt', data);
		},
		prompt () {
			const data = { 
				onShow: true, 
				text: '是否继续？',
				btns: [{
					text: '继续', 
					fn: function() { console.log('继续'); }
				}, {
					text: '退出',
					fn: function() { console.log('退出'); }
				}]
			}
			this.$store.commit('setPrompt', data);
		},
		downloadWithATag () {
			let aTag = document.createElement('a');
			aTag.setAttribute('href', '/static/file-for-download.png');
			aTag.setAttribute('download', 'download-with-a-tag.png');
			aTag.click();
			aTag = null;
		},
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.dynamic {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: px2rem(90px);
		margin-top: px2rem(90px);
	}
	input[type=button] {
		width: px2rem(600px);
		height: px2rem(120px);
		font-size: px2rem(52px);
		border-radius: px2rem(16px);
		border: 1px solid #ccc;
		margin: px2rem(15px) 0;
	}
	input[type=button]:active {
		background-color: #bbb;
	}
	input[type=file] {
		display: none;
	}
</style>