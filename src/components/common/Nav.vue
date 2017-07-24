<template>
	<div class="nav">
		<!-- <div> -->
			<div v-for="item in navData" class="item">
				<router-link :to="{ path: item.url }">
					<span>{{ item.title }}<b></b></span>
				</router-link>
			</div>
		<!-- </div> -->
	</div>
</template>

<script>
export default {
	name: 'gotoItem',
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
				title: '通讯录',
				url: '/contacts/address-book'
			}, {
				title: '通讯录',
				url: '/contacts/address-book'
			}, {
				title: '通讯录',
				url: '/contacts/address-book'
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

<style scoped>
	.nav {
		height: .8rem;
		background-color: #fff;
		overflow-x: auto;
		display: flex;
		/*white-space:nowrap;*/
		/*overflow-x: scroll;*/
	}
	.item {
		/*flex-grow: 1;*/
		/*padding: 0 .4rem;*/
		font-size: .28rem;
		line-height: .8rem;
		text-align: center;
		height: .8rem;
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
		margin-top: -.08rem;
		display: block;
		height: .08rem;
		background: #12b7f5;
	}
</style>