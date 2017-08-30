<template>
	<div class="msg-item" @click="click">
		<div class="avatar">
			<img :src="'/static/img/' + chatInfo.account + '.jpg'">
		</div>
		<div class="text">
			<div>
				<p>{{ chatInfo.name }}</p>
				<i>{{ chatInfo.lastTime }}</i>
			</div>
			<span>{{ chatInfo.lastMsg }}</span>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	props: ['chatInfo'],
	methods: {
		click () {
			this.$router.push({ 
				path: '/show-panel/conversation',
				query: { 
					friendID: this.chatInfo.friendID, 
					name: this.chatInfo.name,
					account: this.chatInfo.account
				}
			});
		}
	}
}
</script>

<style scoped>
	.msg-item {
		display: flex;
		height: 1.4rem;
		background-color: #fff;
		border-bottom: 1px solid #e6e6e6;
		text-align: left;
	}
	.avatar {
		display: flex;
		width: 1.6rem;
		justify-content: center;
		align-items: center;
	}
	.avatar > img {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}
	.text {
		flex: 1;
	}
	.text > div {
		flex: 1;
		display: flex;
	}
	.text p {
		margin-top: .12rem;
		font-size: .36rem;
		color: #000;
		flex: 1;
		text-overflow: ellipsis;
		width: .1rem;
		overflow: hidden;
		white-space: nowrap;
	}
	.text span {
		display: block;
		margin-top: .1rem;
		color: #808080;
		font-size: .26rem;
		text-overflow: ellipsis;
		width: 5rem;
		overflow: hidden;
		white-space: nowrap;
	}
	.text i {
		font-size: .26rem;
		color: #999;
		height: .5rem;
		padding: .22rem .26rem 0 0;
	}
</style>