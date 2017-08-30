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

<style scoped>
	.msg {
		display: flex;
		margin: .4rem 0;
	}
	.avatar {
		width: 1.3rem;
		background-color: #f0f2f8;
	}
	.avatar img {
		width: .9rem;
		border-radius: 50%;
		margin: 0 auto;
		display: block;
	}
	.content {
		flex: 1;
	}
	.content > span {
		background-color: #fff;
		font-size: .28rem;
		color: #000;
		display: inline-block;
		max-width: 4rem;
		padding: .236rem .26rem;
		border-radius: .24rem;
	}
</style>