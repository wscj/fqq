<template>
	<div class="msg" :style="msgStyle">
		<div class="avatar">
			<img :src="'/static/img/' + avatar + '.jpg'">
		</div>
		<div class="content">
			<span :style="spanStyle">{{ msg || '&nbsp;' }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['dir', 'avatar', 'msg'],
	computed: {
		msgStyle () {
			return {
				'flex-direction': this.dir && this.dir === 'right' ? 'row-reverse' : 'row'
			}
		},
		spanStyle () {
			const left = {
				float: 'left',
				background: '#fff',
				color: '#000'
			}
			const right = {
				float: 'right',
				background: '#10b5f6',
				color: '#fff'
			}
			return this.dir && this.dir === 'right' ? right : left;
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.msg {
		display: flex;
		margin: px2rem(60px) 0;
	}
	.avatar {
		width: px2rem(195px);
		background-color: #f0f2f8;
	}
	.avatar img {
		width: px2rem(135px);
		border-radius: 50%;
		margin: 0 auto;
		display: block;
	}
	.content {
		flex: 1;
	}
	.content > span {
		background-color: #fff;
		font-size: px2rem(42px);
		color: #000;
		display: inline-block;
		max-width: px2rem(600px);
		padding: px2rem(35.4px) px2rem(39px);
		border-radius: px2rem(36px);
	}
</style>