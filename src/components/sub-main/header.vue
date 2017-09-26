<template>
	<div class="header">
		<div class="avatar" @click="imgClick">
			<img :src="'/static/img/' + this.$store.state.user.account + '.jpg'" @error="onError">
		</div>
		<span @click="test">{{ parentData.title }}</span>
		<div :class="parentData.page" name="add">
			<span name="msg"></span>
			<span name="contacts">添加</span>
			<span name="dynamic">更多</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['parentData'],
	methods: {
		imgClick: function() {
			this.$store.commit('showSidebar');
			// this.$emit('avatarClick');
		},
		onError (e) {
			e.target.src = '/static/img/default.jpg';
		},
		test () {
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.header {
		position: relative;
		width: 100%;
		height: px2rem(150px);
		background: -webkit-linear-gradient(left top, #4f8cfe , #39b9fe);
		z-index: 1;
	}
	.avatar {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: px2rem(150px);
		z-index: 1;
	}
	.avatar img {
		position: absolute;
		top: px2rem(22px);
		left: px2rem(45px);
		display: block;
		width: px2rem(105px);
		height: px2rem(105px);
		border-radius: 50%;
	}
	.header > span {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		line-height: px2rem(150px);
		font-size: px2rem(54px);
		color: #fff;
		text-align: center;
	}
	div[name=add] {
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		width: px2rem(150px);
		height: 100%;
	}
	div[name=add] img {
		display: none;
		width: px2rem(75px);
		height: px2rem(75px);
		margin: px2rem(37px) 0 0 px2rem(37px);
	}
	div[name=add] span {
		font-size: px2rem(48px);
		color: #fff;
		height: 100%;
		line-height: px2rem(150px);
		display: none;
	}
	.msg span[name=msg],
	.contacts span[name=contacts],
	.dynamic span[name=dynamic] {
		display: block !important;
	}
	span[name=msg] {
		background: url('../../assets/img/add.png') no-repeat;
		background-size: px2rem(60px);
		background-position: center;
	}
</style>