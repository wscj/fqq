<template>
	<div>
		<v-pull-refresh></v-pull-refresh>
		<v-search :clickEvent="showsearch"></v-search>
		<ul @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" @click="test">
			<li v-for="chat in chats">
				<v-msg-item :chatInfo="chat"></v-msg-item>
			</li>
		</ul>
	</div>
</template>

<script>
import search from '../common/Search';
import msgItem from '../common/MsgItem';
import pullRefresh from '../common/PullRefresh';
export default {
	data () {
		return {
			chats: [],
			touchInfo: {},
			pullHeight: 0
		}
	},
	components: {
		vSearch: search,
		vMsgItem: msgItem,
		vPullRefresh: pullRefresh,
	},
	activated () {
		this.getData();
	},
	methods: {
		test() {
			// const a = this.$el.querySelector('.pull-refresh .icon')
			// console.log(a, 333)
		},
		getData () {
			this.$http.get('/getMsgList').then(
				(resp) => {
					if (toString.call(resp.body.list) === '[object Array]') {
						this.chats = resp.body.list;
					}
				},
				(resp) => {
					console.error(resp);
				}
			)
		},
		anim (_this, lastHeight) {

			return new Promise(function(resolve, reject) {
				Velocity(
					_this.$el.querySelector('.pull-refresh'), 
					{ height: lastHeight }, 
					{ 
						duration: 200, 
						complete: () => {
							resolve();
						}
					}
				);
			});

		},
		showsearch (event) {
			this.$router.push('/no-transition-panel/');
		},
		touchstart (event) {
			const touch = event.targetTouches[0];
			this.touchInfo.pageX = touch.pageX;
			this.touchInfo.pageY = touch.pageY;
		},
		touchmove (event) {
			const pull = this.$el.querySelector('.pull-refresh');
			const touch = event.targetTouches[0];
			const height = (touch.pageY - this.touchInfo.pageY) / 2;

			pull.style.height = height + 'px';
			if (!this.touchInfo.pullEnough && height >= this.pullHeight) {
				this.touchInfo.pullEnough = true;
				const icon = pull.querySelector('.icon');
				icon.classList.add('rotate');
			}
			else if (this.touchInfo.pullEnough && height < this.pullHeight) {
				this.touchInfo.pullEnough = false;
				const icon = pull.querySelector('.icon');
				icon.classList.remove('rotate');
			}
		},
		touchend (event) {
			const pull = this.$el.querySelector('.pull-refresh');
			let h = pull.style.height;
			h = Number(h.substr(0, h.length - 2));
			const lastHeight = h >= this.pullHeight ? this.pullHeight : 0;

			this.anim(this, lastHeight).then(() => {
				if (lastHeight !== 0) {
					const icon = pull.querySelector('.icon');
					icon.classList.add('loading');
					this.$store.commit('setPullRefresh', { text: '正在刷新...' });
					setTimeout(() => {
						pull.classList.add('success');
						this.$store.commit('setPullRefresh', { text: '刷新成功' });
						setTimeout(() => {
							this.anim(this, 0).then(() => {
								pull.classList.remove('success');
								icon.classList.remove('loading');
								this.$store.commit('setPullRefresh', { text: '下拉刷新' });
								this.touchInfo.pullEnough = false;
							})
						}, 500);
					}, 1000);
				}
			})
		}
	},
	created () {
		let fontSize = document.querySelector("html").style.fontSize;
		fontSize = Number(fontSize.substr(0, fontSize.length - 1)) / 100;
		this.pullHeight = Math.round(1.33333 * fontSize * 16);
	}
}
</script>

<style lang="scss" scoped>
</style>