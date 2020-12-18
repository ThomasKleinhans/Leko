<template>

	<section class="Hero">

		<div class="Hero-inner" :class="{'video-loaded': isFirstVideoLoaded}">

			<span class="Hero-label">We are Leko</span>

			<h2 class="Hero-title">We are committed to revolutionising the way buildings are created.</h2>

		</div>

		<transition>
			<video class="Hero-video u-mediaFullscreen u-mediaFullscreen--absolute" :src="headerVideo" ref="HeroVideo" playsinline muted loop v-show="isFirstVideoLoaded" />
		</transition>

	</section>

</template>

<script>
	import { heroMixin } from '@/mixins/heroMixin.js'

	export default {

		mixins: [heroMixin],

		props: {
			headerVideo: String,
		},

	}
</script>
