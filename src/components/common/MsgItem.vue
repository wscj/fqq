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
			this.fn.gotoConversation(this, this.chatInfo);
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.msg-item {
		display: flex;
		height: px2rem(210px);
		background-color: #fff;
		border-bottom: 1px solid #e6e6e6;
		text-align: left;
	}
	.msg-item:active {
		background-color: #edfaff;
	}
	.avatar {
		display: flex;
		width: px2rem(240px);
		justify-content: center;
		align-items: center;
	}
	.avatar > img {
		width: px2rem(150px);
		height: px2rem(150px);
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
		margin-top: px2rem(18px);
		font-size: px2rem(54px);
		color: #000;
		flex: 1;
		text-overflow: ellipsis;
		width: px2rem(15px);
		overflow: hidden;
		white-space: nowrap;
	}
	.text span {
		display: block;
		margin-top: px2rem(15px);
		color: #808080;
		font-size: px2rem(39px);
		text-overflow: ellipsis;
		width: px2rem(750px);
		overflow: hidden;
		white-space: nowrap;
	}
	.text i {
		font-size: px2rem(39px);
		color: #999;
		height: px2rem(75px);
		padding: px2rem(33px) px2rem(39px) 0 0;
	}
</style>