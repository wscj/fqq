<template>
  <div class="chat-input" contenteditable="true" spellcheck="false">
    <!-- <span class="blink"></span> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
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