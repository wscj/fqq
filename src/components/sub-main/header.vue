<template>
	<div class="header">
		<div class="avatar"><img src="../../assets/img/avatar.jpg"></div>
		<span>消息</span>
		<div class="add"><img src="../../assets/img/add.png"></div>
	</div>
</template>

<script>
export default {
	name: 'header',
	data () {
		return {
			msg: 'Header'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header {
		position: relative;
		height: 1rem;
		background: -webkit-linear-gradient(left top, #4f8cfe , #39b9fe);
	}
	.avatar {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: .95rem;
		z-index: 1;
	}
	.avatar img {
		position: absolute;
		top: .15rem;
		left: .25rem;
		display: block;
		width: .7rem;
		height: .7rem;
		border-radius: 50%;
	}
	.header span {
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
	.add {
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		width: 1rem;
		height: 100%;
	}
	.add img {
		width: .56rem;
		height: .56rem;
		margin: .22rem 0 0 .2rem;
	}
</style>