<template>
	<div>
		<app-header></app-header>
		<transition name="slide" mode="out-in">
			<router-view></router-view>
		</transition>
		<app-footer></app-footer>
	</div>
</template>

<script>
import HeadMenu from "./components/shared/HeadMenu.vue";
import FootMenu from "./components/shared/FootMenu.vue";
export default {
	components: {
		appHeader: HeadMenu,
		appFooter: FootMenu,
	},
	created() {
		this.$store.dispatch("initApp");
        this.$store.dispatch('initTradeResult');
		console.log(this)
	},
};
</script>

<style>
.slide-enter {
	opacity: 0;
}
.slide-enter-active {
	animation: slide-in .5s ease-out forwards;
	transition: opacity .5s;
}
.slide-leave-active {
	animation: slide-out .5s ease-out forwards;
	transition: opacity .5s;
	opacity: 0;
	position: absolute;
	width: 100%;
}
@keyframes slide-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes slide-out {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
</style>