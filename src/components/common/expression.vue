<template>
  <div class="expression" @click="click">
    <img v-for="(value, key) in this.expression" :src="value" :data-key="key">
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['lastEditRange', 'editID'],
    methods: {
      click (ev) {
        this.$emit('select', ev.target.getAttribute('data-key'));
        this.insert();
      },
      insert () {
				// var edit = document.getElementById(this.editID);
				// // var emojiInput = document.getElementById('emojiInput')
				// var insertText = '<img data-v-6bbac036="" src="data:image/gif;base64,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" data-key="14">'; //data:image/gif;base64,ddd'
				// edit.focus()
				// var selection = getSelection()
				// if (this.lastEditRange) {
				// 	selection.removeAllRanges()
				// 	selection.addRange(this.lastEditRange)
				// }
				// // debugger
				// if (selection.anchorNode.nodeName != '#text') {
				// 	var emojiText = document.createTextNode(insertText)
				// 	if (edit.childNodes.length > 0) {
				// 		for (var i = 0; i < edit.childNodes.length; i++) {
				// 			if (i == selection.anchorOffset) {
				// 				edit.insertBefore(emojiText, edit.childNodes[i])
				// 				break;
				// 			}
				// 		}
				// 	} else {
				// 		var temp = 'data:image/gif;base64,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';
				// 		var img = document.createElement('img');
				// 		img.src = temp
				// 		edit.appendChild(img)
				// 		// edit.appendChild(emojiText)
				// 	}
				// 	// debugger
				// 	var range = document.createRange()
				// 	range.selectNodeContents(emojiText)
				// 	range.setStart(emojiText, emojiText.length)
				// 	range.collapse(true)
				// 	selection.removeAllRanges()
				// 	selection.addRange(range)
				// } else {
				// 	var range = selection.getRangeAt(0)
				// 	var textNode = range.startContainer;
				// 	var rangeStartOffset = range.startOffset;
				// 	textNode.insertData(rangeStartOffset, insertText)
				// 	range.setStart(textNode, rangeStartOffset + insertText.length)
				// 	// range.setStart(textNode, rangeStartOffset + emojiInput.value.length)
				// 	range.collapse(true)
				// 	selection.removeAllRanges()
				// 	selection.addRange(range)
				// }
				// // this.lastEditRange = selection.getRangeAt(0)
				// this.$emit('blind', selection.getRangeAt(0));
			}
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/function';
  .expression {
    height: px2rem(672px);
    background: #fff;
    overflow-y: auto;
    padding: px2rem(10px) 0;
    img {
      padding: px2rem(10px);
      width: px2rem(88px);
      height: px2rem(88px);
      margin: 0;
    }
  }
</style>