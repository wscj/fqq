<template>
  <div
    class="chat-input"
    contenteditable="true"
    spellcheck="false"
    @keyup.enter="enter"
    @input="input">
  </div>
</template>

<script>
export default {
  props: ['emitSend'],
  data () {
    return {
      text: '',
    }
  },
  methods: {
    input (ev) {
      this.text = ev.target.innerText;
      this.$emit('btnDisabled', this.text.length === 0);
    },
    enter (ev) {
      this.send();
    },
    send () {
      this.$emit('sendValue', this.text);
      this.text = '';
      this.$el.innerText = '';
      this.$emit('btnDisabled', true);
    }
  },
  watch: {
    emitSend: function (newValue, oldValue) {
      this.send();
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/function';
  .chat-input {
    flex: 1;
    border: none;
    margin: 0 px2rem(15px) 0 px2rem(18px);
    border-radius: px2rem(9px);
    padding: px2rem(30px);
    font-size: px2rem(42px);
    background-color: #fff;
    overflow-y: hidden;
    line-height: px2rem(42px);
  }
  .chat-input:focus {
    outline: none;
  }
</style>