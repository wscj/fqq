<template>
	<div class="list">
		<ul>
			<li v-for="item in list" @click="item.fn(item.text)">
				<img :src="item.pic">
				<span>{{ item.text }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import crown from '../../assets/img/crown.png';
import wallet from '../../assets/img/wallet.png';
import pallet from '../../assets/img/pallet.png';
import collect from '../../assets/img/collect.png';
import pic from '../../assets/img/pic.png';
import folder from '../../assets/img/folder.png';
import wifi from '../../assets/img/wifi.png';
export default {
	data () {
		return {
			list: [{
				pic: crown,
				text: '了解会员特权',
				fn: text => console.log(text)
			}, {
				pic: wallet,
				text: 'QQ钱包',
				fn: text => console.log(text)
			}, {
				pic: pallet,
				text: '个性装扮',
				fn: text => console.log(text)
			}, {
				pic: collect,
				text: '我的收藏',
				fn: text => console.log(text)
			}, {
				pic: pic,
				text: '我的相册',
				fn: text => console.log(text)
			}, {
				pic: folder,
				text: '我的文件',
				fn: text => console.log(text)
			}, {
				pic: wifi,
				text: '免流量特权',
				fn: text => console.log(text)
			}]
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
	.list {
		padding-top: px2rem(46px);
		li {
			height: px2rem(138px);
			display: block;
			overflow-y: hidden;
			line-height: px2rem(138px);
			img {
				width: px2rem(80px);
				display: block;
				float: left;
				margin: px2rem(29px) px2rem(39px) 0 px2rem(62px);
			}
			span {
				display: block;
				float: left;
				font-size: px2rem(50px);
				color: #000;
			}
		}
		li:active {
			background-color: #f5f5f5;
		}
	}
</style>