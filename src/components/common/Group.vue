<template>
	<div>
		<div class="group" @click="click">
			<b :class="expandClass" name="group"></b>
			<span>{{ groupInfo.name }}</span>
			<i>{{ groupInfo.onlineCount }}</i>
		</div>
		<ul :class="expandClass" name="list">
			<li v-for="friend in groupInfo.friends">
				<div class="avatar">
					<img :src="'/static/img/' + friend.account + '.jpg'">
				</div>
				<div class="text">
					<p>{{ friend.name }}</p>
					<span>[{{ friend.state }}] {{ friend.signature }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			expandClass: ''
		}
	},
	props: ['groupInfo'],
	methods: {
		click: function(e) {
			this.expandClass = this.expandClass ? '' : 'expand';
		}
	}
}
</script>

<style scoped>
	.group {
		display: flex;
		background-color: #fff;
		transition: height 180ms linear;
	}
	.group b {
		width: .8rem;
		height: .8rem;
		background: url('../../assets/img/right.png') no-repeat;
		background-size: .3rem;
		background-position: center;
		transition: 180ms linear;
	}
	.group span {
		flex: 1;
		font-size: .3rem;
		color: #000;
		height: .8rem;
		line-height: .8rem;
	}
	.group i {
		font-style: normal;
		font-size: .26rem;
		color: #999;
		line-height: .8rem;
		padding: 0 .4rem;
	}
	ul {
		height: 0;
		overflow: hidden;
	}
	li {
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
	.expand[name=group] {
		transform: rotate(90deg);
	}
	.expand[name=list] {
		height: auto;
		/*background: pink;*/
	}
</style>