<template>
	<div class="group-item" @click="click">
		<div class="avatar">
			<img :src="'/static/img/' + friendInfo.account + '.jpg'">
		</div>
		<div class="text">
			<p>{{ friendInfo.name }}</p>
			<span>[{{ friendInfo.state }}] {{ friendInfo.signature }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['friendInfo'],
	methods: {
		click () {
			this.fn.gotoConversation(this, this.friendInfo);
		}
	}
}
</script>

<style scoped>
	.group-item {
		font-size: .3rem;
		height: 1.2rem;
		background-color: #fff;
		display: flex;
		border-bottom: 1px solid #e6e6e6;
	}
	.avatar {
		display: flex;
		width: 1.36rem;
		justify-content: center;
		align-items: center;
	}
	.avatar > img {
		width: .88rem;
		height: .88rem;
		border-radius: 50%;
	}
	.text {
		flex: 1;
	}
	.text p {
		margin-top: .16rem;
	}
	.text span {
		color: #808080;
		font-size: .26rem;
	}
</style>