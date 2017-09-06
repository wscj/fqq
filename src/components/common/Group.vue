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
		}
	},
	components: {
		vGroupItem
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.group {
		display: flex;
		background-color: #fff;
		transition: height 180ms linear;
		b {
			width: px2rem(60px);
			height: px2rem(60px);
			background: url('../../assets/img/right.png') no-repeat;
			background-size: px2rem(22px);
			background-position: center;
			transition: 180ms linear;
		}
		span {
			flex: 1;
			font-size: px2rem(22px);
			color: #000;
			height: px2rem(60px);
			line-height: px2rem(60px);
		}
		i {
			font-style: normal;
			font-size: px2rem(20px);
			color: #999;
			line-height: px2rem(60px);
			padding: 0 px2rem(30px);
		}
	}
	ul {
		height: 0;
		overflow: hidden;
		li {
			font-size: px2rem(22px);
			height: px2rem(90px);
			background-color: #fff;
			border-bottom: 1px solid #e6e6e6;
		}
	}
	.expand[name=group] {
		transform: rotate(90deg);
	}
	.expand[name=list] {
		height: auto;
	}
</style>