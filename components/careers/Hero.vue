<template>
	<section class="Hero">

		<div class="Hero-inner" :class="{'video-loaded': isFirstVideoLoaded}">

			<span class="Hero-label">{{ intro.subhead }}</span>
			<h2 class="Hero-title" v-html="$options.filters.nl2br(intro.title)"></h2>

			<div class="JobCTA-wrapper">
				<div class="JobCTA" @click="goToJobSection()">
					<span class="JobCTA-number">{{ jobsNumber }}</span>
					<span>jobs Current openings</span>
					<icon width="10" height="11" name="arrow" class="JobCTA-icon" />
				</div>
			</div>
		</div>

		<transition>
			<video class="Hero-video u-mediaFullSize u-mediaFullSize--absolute" :src="intro.video" ref="HeroVideo" playsinline muted autoplay loop v-show="isFirstVideoLoaded" />
		</transition>

	</section>

</template>

<script>
	import { heroMixin } from '@/mixins/hero.js'
	import { mapGetters } from 'vuex'

	export default {

		mixins: [heroMixin],

		props: {
			intro: Object,
			destination: String
		},

		methods: {
			goToJobSection() {
				fullpage_api.moveTo('Jobs')
			}
		},

		computed: {
			...mapGetters('jobs', {
				jobsNumber: 'getNumber'
			})
		}
	}
</script>
