<template>
	<div class="contacts">
		<v-search :clickEvent="showsearch"></v-search>
		<hr>
		<v-goto-item :text="'新朋友'"></v-goto-item>
		<!-- <hr> -->
		<div class="blank"></div>
		<hr>
		<v-nav></v-nav>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
import search from '../common/Search';
import gotoItem from '../common/GotoItem';
import nav from '../common/Nav';
export default {
	data () {
		return {
			msg: ''
		}
	},
	components: {
		vSearch: search,
		vGotoItem: gotoItem,
		vNav: nav
	},
	methods: {
		showsearch: function() {
			
		},
		emptyFn: function() {}
	}
}
</script>

<style scoped>
	.contacts {
		font-size: 1rem;
	}
	hr {
		border: none;
		border-top: 1px solid #e6e6e6;
	}
	.blank {
		height: .32rem;
	}
</style>