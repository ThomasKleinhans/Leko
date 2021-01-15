<template>

	<section class="Hero">

		<div class="Hero-inner" :class="{'video-loaded': isFirstVideoLoaded}">

			<span class="Hero-label">{{ intro.subhead }}</span>
			<h1 class="Hero-title" v-html="$options.filters.nl2br(intro.title)"></h1>
			<a href="#" class="Hero-cta" @click.prevent="toggleModal" v-if="intro.youtubeVideo">Watch the video</a>

		</div>

		<transition>
			<video class="Hero-video u-mediaFullSize u-mediaFullSize--absolute" :src="intro.video" ref="HeroVideo" playsinline muted autoplay loop v-show="isFirstVideoLoaded" />
		</transition>

		<template v-if="intro.youtubeVideo">
			<transition>
				<div class="Modal" v-show="isModalVisible" @click="toggleModal">
					<transition>
						<div class="Modal-content" v-show="isModalVisible">
							<iframe ref="iframe" class="Modal-video" v-if="isModalVisible" width="560" height="315" :src="intro.youtubeVideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</transition>
				</div>
			</transition>
		</template>

	</section>

</template>

<script>
	import { heroMixin } from '@/mixins/hero.js'
	import { modalMixin } from '@/mixins/modal.js'

	export default {

		mixins: [heroMixin, modalMixin],

		props: {
			intro : Object
		},

		mounted() {
			setTimeout( () => {
				fullpage_api.reBuild()
			}, 5000)
		}
	}
</script>
