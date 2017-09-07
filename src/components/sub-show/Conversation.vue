<template>
	<div class="conversation">
		<v-header @leftClick="goback" :bTitle="title"></v-header>
		<div class="content">
			<v-msg v-for="item in list" :avatar="item.avatar" :msg="item.msg" :dir="item.dir"></v-msg>
		</div>
		<div class="footer">
			<div class="input">
				<input type="text" class="text" v-model="text" >
				<input type="button" value="发送" class="button" :style="styleObj" @click="send" >
			</div>
			<div class="toolbar">
				<b name="record"></b>
				<b name="picture"></b>
				<b name="camera"></b>
				<b name="red_package"></b>
				<b name="gif"></b>
				<b name="smile"></b>
				<b name="add2"></b>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../common/ConversationHeader'
import Msg from '../common/Msg'
export default {
	data () {
		return {
			text: '',
			list: [],
			// list: [{
			// 	avatar: '6664',
			// 	msg: '在吗？'
			// }, {
			// 	avatar: '6666',
			// 	msg: '不在啊，我没都在线！！',
			// 	dir: 'right'
			// }, {
			// 	avatar: '6664',
			// 	msg: '你是猪啊[抠鼻]'
			// }, {
			// 	avatar: '6666',
			// 	msg: '。。。',
			// 	dir: 'right'
			// }],
			title: '',
			friendAccount: '',
			autoReplyMsg: ['猪，你来啦', '黑猪白猪你是小猪猪']
		}
	},
	computed: {
		styleObj () {
			return {
				color: this.text.length ? '#fff' : '#f1f2f3',
				background: this.text.length ? '#10b5f6' : '#dddee2'
			}
		}
	},
	components: {
		vHeader: Header,
		vMsg: Msg
	},
	methods: {
		goback () {
			this.$router.back();
		},
		send () {
			if (this.text.length) {
				this.list.push({
					avatar: JSON.parse(localStorage.user).account,
					msg: this.text,
					dir: 'right'
				});
				var content = this.$el.querySelector('.content');
				setTimeout(function() {
					content.scrollTop = content.scrollHeight - content.offsetHeight;
				}, 60);
				setTimeout(() => {
					let msg = this.autoReplyMsg.shift() || '你是猪，你说的我听不懂。。';
					this.list.push({
						avatar: this.friendAccount,
						msg: msg
					});
					this.$http.post('/addMsg', {
						fromID: this.$route.query.friendID,
						toID: JSON.parse(localStorage.user).rowid,
						msg: msg
					});
					setTimeout(() => {
						content.scrollTop = content.scrollHeight - content.offsetHeight;
					}, 60);
				}, 1000);

				this.$http.post('/addMsg', {
					fromID: JSON.parse(localStorage.user).rowid,
					toID: this.$route.query.friendID,
					msg: this.text
				});
				this.text = '';
			}
		}
	},
	created () {
		this.title = this.$route.query.name;
		this.friendAccount = this.$route.query.account;
		this.$http.get('/getConversation', { params: { friendID: this.$route.query.friendID } }).then(
			resp => {
				this.list = resp.body.list;
			},
			resp => {
				console.log(resp, 'fail');
			}
		)
	}
	// watch: {
	// 	'$route' (to, from) {
	// 		console.log(to);
	// 		console.log(from);
	// 	}
	// },
}
</script>

<style scoped>
	.conversation {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #f0f2f8;
	}
	.content {
		flex: 1;
		overflow-y: auto;
	}
	.footer {
		height: 1.5rem;
	}
	.input {
		height: .66rem;
		display: flex;
		margin-bottom: .04rem;
	}
	.text {
		flex: 1;
		border: none;
		margin: 0 .1rem 0 .12rem;
		border-radius: .06rem;
		padding: .2rem;
	}
	.button {
		width: 1rem;
		margin-right: .12rem;
		border: none;
		border-radius: .12rem;
		color: #f1f2f3;
		background-color: #dddee2;
		font-size: .28rem;
	}
	.toolbar {
		height: .8rem;
		display: flex;
	}
	.toolbar > b {
		flex: 1;
		background-repeat: no-repeat;
		background-position: center;
		background-size: .5rem;
	}
	.toolbar > b[name=record] {
		background-image: url('../../assets/img/record.png');
	}
	.toolbar > b[name=picture] {
		background-image: url('../../assets/img/picture.png');
	}
	.toolbar > b[name=camera] {
		background-image: url('../../assets/img/camera.png');
	}
	.toolbar > b[name=red_package] {
		background-image: url('../../assets/img/red_package.png');
		background-size: .4rem;
	}
	.toolbar > b[name=gif] {
		background-image: url('../../assets/img/gif.png');
		background-size: .42rem;
	}
	.toolbar > b[name=smile] {
		background-image: url('../../assets/img/smile.png');
		background-size: .48rem;
	}
	.toolbar > b[name=add2] {
		background-image: url('../../assets/img/add2.png');
		background-size: .44rem;
	}
</style>