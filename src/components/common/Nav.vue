<template>
	<div class="nav">
		<div v-for="item in navData" class="item">
			<router-link :to="{ path: item.url }">
				<span>{{ item.title }}<b></b></span>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			navData: [{
				title: '好友',
				url: '/contacts/'
			}, {
				title: '群',
				url: '/contacts/groups'
			}, {
				title: '多人聊天',
				url: '/contacts/many-chat'
			}, {
				title: '设备',
				url: '/contacts/device'
			}, {
				title: '通讯录',
				url: '/contacts/address-book'
			}, {
				title: '公众号',
				url: '/contacts/official-accounts'
			}]
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.nav {
		height: px2rem(120px);
		background-color: #fff;
		overflow-x: auto;
		overflow-y: hidden;
		white-space:nowrap;
		font-size: 0;
	}
	.item {
		display: inline-block;
		padding: 0 px2rem(57px);
		font-size: px2rem(42px);
		line-height: px2rem(120px);
		text-align: center;
		height: px2rem(120px);
		position: relative;
	}
	a {
		display: block;
	}
	a, a:visited {
		color: #777;
	}
	a span {
		display: inline-block;
	}
	.router-link-exact-active {
		color: #12b7f5;
	}
	.router-link-exact-active  b {
		margin-top: px2rem(-12px);
		display: block;
		height: px2rem(12px);
		background: #12b7f5;
	}
	.nav::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
</style>