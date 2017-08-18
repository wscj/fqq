<template>
	<div class="header">
		<div class="avatar" @click="imgClick"><img src="/static/img/avatar.jpg"></div>
		<span>{{ parentData.title }}</span>
		<div :class="parentData.page" name="add">
			<span name="msg"></span>
			<span name="contacts">添加</span>
			<span name="dynamic">更多</span>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	props: ['parentData'],
	methods: {
		imgClick: function() {
			this.$store.commit('showSidebar');
			// this.$emit('avatarClick');
		}
	}
}
</script>

<style scoped>
	.header {
		position: relative;
		width: 100%;
		height: 1rem;
		background: -webkit-linear-gradient(left top, #4f8cfe , #39b9fe);
		z-index: 1;
	}
	.avatar {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 1rem;
		z-index: 1;
	}
	.avatar img {
		position: absolute;
		top: .15rem;
		left: .3rem;
		display: block;
		width: .7rem;
		height: .7rem;
		border-radius: 50%;
	}
	.header > span {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		line-height: 1rem;
		font-size: .36rem;
		color: #fff;
		text-align: center;
	}
	div[name=add] {
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		width: 1rem;
		height: 100%;
	}
	div[name=add] img {
		display: none;
		width: .5rem;
		height: .5rem;
		margin: .25rem 0 0 .25rem;
	}
	div[name=add] span {
		font-size: .32rem;
		color: #fff;
		height: 100%;
		line-height: 1rem;
		display: none;
	}
	.msg span[name=msg],
	.contacts span[name=contacts],
	.dynamic span[name=dynamic] {
		display: block !important;
	}
	span[name=msg] {
		background: url('../../assets/img/add.png') no-repeat;
		background-size: .4rem;
		background-position: center;
	}
</style>