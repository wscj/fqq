<template>
	<div>
		<div class="group" @click="click">
			<b :class="expandClass" name="group"></b>
			<span>{{ groupInfo.name }}</span>
			<i>{{ groupInfo.online }}/{{ groupInfo.online + groupInfo.offline }}</i>
		</div>
		<ul :class="expandClass" name="list">
			<li v-for="friend in groupInfo.friends">
				<v-group-item :friendInfo="friend"></v-group-item>
			</li>
		</ul>
	</div>
</template>

<script>
import vGroupItem from './GroupItem';
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
			console.log(666);
		}
	},
	components: {
		vGroupItem
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
		border-bottom: 1px solid #e6e6e6;
	}
	.expand[name=group] {
		transform: rotate(90deg);
	}
	.expand[name=list] {
		height: auto;
	}
</style>