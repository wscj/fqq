<template>
	<div class="conversation">
		<v-header @leftClick="goback" :bTitle="title"></v-header>
		<div class="content">
			<v-msg v-for="(item, key, index) in list" 
				:avatar="item.avatar"
				:msg="item.msg"
				:dir="item.dir"
				:key="index"></v-msg>
		</div>
		<div class="footer">
			<div class="input">
				<v-chat-input
					@sendValue="send"
					@btnDisabled="btnDisabled"
					:emitSend="emitSend"></v-chat-input>
				<input
					type="button"
					value="发送"
					class="button"
					:style="styleObj"
					@click="emitSend = 1 - emitSend" >
			</div>
			<div class="toolbar">
				<b name="record"></b>
				<b name="picture"></b>
				<b name="camera"></b>
				<b name="red_package"></b>
				<b name="gif"></b>
				<b name="smile" @click="showExpression" :class="{ active: expression }"></b>
				<b name="add2"></b>
			</div>
			<v-expression v-show="expression"></v-expression>
		</div>
	</div>
</template>

<script>
import vHeader from '../common/ConversationHeader'
import vMsg from '../common/Msg'
import vChatInput from '../common/ChatInput'
import vExpression from '../common/Expression'
export default {
	data () {
		return {
			list: [],
			title: '',
			friendAccount: '',
			autoReplyMsg: ['找我啥事？', '啥？你说啥？'],
			emitSend: 0,
			disabled: true,
			expression: false
		}
	},
	computed: {
		styleObj () {
			return {
				color: this.disabled ? '#f1f2f3' : '#fff',
				background: this.disabled ? '#dddee2' : '#10b5f6'
			}
		}
	},
	components: {
		vHeader,
		vMsg,
		vChatInput,
		vExpression,
	},
	methods: {
		showExpression () {
			this.expression = !this.expression;
		},
		btnDisabled (disabled) {
			this.disabled = disabled;
		},
		goback () {
			this.$router.back();
		},
		send (text) {
			if (text.length) {
				//发送消息
				this.list.push({
					avatar: JSON.parse(localStorage.user).account,
					msg: text,
					dir: 'right'
				});
				var content = this.$el.querySelector('.content');
				setTimeout(function() {
					content.scrollTop = content.scrollHeight - content.offsetHeight;
				}, 60);

				this.$http.post('/addMsg', {
					fromID: JSON.parse(localStorage.user).rowid,
					toID: this.$route.query.friendID,
					msg: text
				});
				text = '';

				//自动回复，延迟半秒，体验更真实
				setTimeout(() => {
					let msg = this.autoReplyMsg.shift() || '我只是个机器人，听不懂你说啥。。。';
					this.list.push({
						avatar: this.friendAccount,
						msg: msg,
						dir: 'left'
					});
					this.$http.post('/addMsg', {
						fromID: this.$route.query.friendID,
						toID: JSON.parse(localStorage.user).rowid,
						msg: msg
					});
					setTimeout(() => {
						content.scrollTop = content.scrollHeight - content.offsetHeight;
					}, 60);
				}, 500);
			}
		},
	},
	created () {
		this.title = this.$route.query.name;
		this.friendAccount = this.$route.query.account;
		this.$http.get('/getConversation', { params: { friendID: this.$route.query.friendID } })
			.then(resp => {
				this.list = resp.data.list;
			});
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/sass/function';
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
		// height: px2rem(225px);
	}
	.input {
		// height: px2rem(99px);
		display: flex;
		flex-wrap: wrap-reverse;
		margin-bottom: px2rem(6px);
	}
	.button {
		width: px2rem(150px);
		margin-right: px2rem(18px);
		border: none;
		border-radius: px2rem(18px);
		color: #f1f2f3;
		background-color: #dddee2;
		font-size: px2rem(42px);
		height: px2rem(101px);
	}
	.toolbar {
		height: px2rem(120px);
		display: flex;
	}
	.toolbar > b {
		flex: 1;
		background-repeat: no-repeat;
		background-position: center;
		background-size: px2rem(75px);
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
		background-size: px2rem(60px);
	}
	.toolbar > b[name=gif] {
		background-image: url('../../assets/img/gif.png');
		background-size: px2rem(63px);
	}
	.toolbar > b[name=smile] {
		background-image: url('../../assets/img/smile.png');
		background-size: px2rem(72px);
	}
	.toolbar > .active[name=smile] {
		background-image: url('../../assets/img/smile-s.png');
	}
	.toolbar > b[name=add2] {
		background-image: url('../../assets/img/add2.png');
		background-size: px2rem(66px);
	}
</style>