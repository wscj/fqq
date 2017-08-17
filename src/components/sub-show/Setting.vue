<template>
	<div>
		<v-header :headerTitle="'设置'" @leftClick="goback"></v-header>
		<div class="items">
			<v-item :text="'消息通知'"></v-item>
			<v-item :text="'聊天记录'"></v-item>
			<v-item :text="'空间清理'"></v-item>
		</div>
		<div class="items">
			<v-item :text="'帐号、设备安全'"></v-item>
			<v-item :text="'联系人、隐私'"></v-item>
			<v-item :text="'辅助功能'"></v-item>
		</div>
		<div class="items">
			<v-item :text="'退出当前账户'" :hasGotoIcon="true" @itemClick="logout"></v-item>
		</div>
	</div>
</template>

<script>
import Header from '../common/SimpleHeader';
import Item from '../common/GotoItem';
export default {
	components: {
		vHeader: Header,
		vItem: Item
	},
	methods: {
		goback: function() {
			this.$router.go(-1);
		},
		//退出登录
		logout: function() {
			localStorage.clear();
			this.$router.back();
		}
	}
}
</script>

<style scoped>
	.items {
		margin-top: .3rem;
		border-top: 1px solid #e6e6e6;
	}
</style>