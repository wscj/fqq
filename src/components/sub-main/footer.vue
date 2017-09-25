<template>
	<div class="footer" @click="click">
		<router-link to="/" name="msg" replace>
			<b class="msg"></b>
			<span>消息</span>
		</router-link>
		<router-link to="/contacts" name="contacts" replace>
			<b class="contacts"></b>
			<span>联系人</span>
		</router-link>
		<router-link to="/dynamic" name="dynamic" replace>
			<b class="dynamic"></b>
			<span>动态</span>
		</router-link>
	</div>
</template>

<script>
export default {
	data () {
		return {
			msgIcon: '../../assets/img/msg_active.png'
		}
	},
	methods: {
		click: function(event) {
			var aTag = event.target.tagName === 'A' ? event.target : event.target.parentElement;
			this.$emit('changePage', aTag.getAttribute('name'));
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.footer {
		height: px2rem(183px);
		width: 100%;
		border-top: 1px solid #e6e6e6;
		display: flex;
		background-color: #fff;
		> a {
			flex: 1;
			height: 100%;
			text-align: center;
			font-size: 0;
		}
		b {
			display: inline-block;
			width: px2rem(90px);
			height: px2rem(90px);
			margin-top: px2rem(18px);
			background-size: px2rem(90px);
		}
		span {
			display: block;
			font-size: px2rem(33px);
			color: #a0a0a0;
		}
	}
	.msg {
		background: url('../../assets/img/msg.png') no-repeat;
	}
	.contacts {
		background: url('../../assets/img/user.png') no-repeat;
	}
	.dynamic {
		background: url('../../assets/img/qzone.png') no-repeat;
	}
	.router-link-exact-active .msg {
		background: url('../../assets/img/msg_active.png') no-repeat;
		background-size: px2rem(90px);
	}
	.router-link-exact-active .contacts {
		background: url('../../assets/img/user_active.png') no-repeat;
		background-size: px2rem(90px);
	}
	.router-link-exact-active .dynamic {
		background: url('../../assets/img/qzone_active.png') no-repeat;
		background-size: px2rem(90px);
	}
	.router-link-exact-active span {
		color: #47bafe;
	}
</style>