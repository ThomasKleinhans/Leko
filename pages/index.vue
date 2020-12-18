<template>
	<client-only v-if="$store.state.home.isLoaded">
		<full-page ref="fullpage" :options="options">

			<hero
				class="section fp-noscroll fp-auto-height-responsive"
				data-tooltip="Leko"
				data-anchor="Leko"
				v-if="intro.isDisplayed"
				:load="load"
				:isFpResponsive="isFpResponsive"
				:intro="intro" />

			<safety
				class="section fp-noscroll fp-auto-height-responsive"
				data-tooltip="Safety"
				data-anchor="Safety"
				v-if="safety.isDisplayed"
				:load="load"
				:leave="leave"
				:safety="safety" />

			<speed
				class="section fp-noscroll fp-auto-height-responsive"
				data-tooltip="Speed"
				data-anchor="Speed"
				v-if="speed.isDisplayed"
				:speed="speed" />

			<technology
				class="section fp-noscroll fp-auto-height-responsive"
				data-tooltip="Technology"
				data-anchor="Technology"
				v-if="technology.isDisplayed"
				:load="load"
				:technology="technology" />

			<sustainability
				class="section fp-noscroll fp-auto-height-responsive"
				data-tooltip="Sustainability"
				data-anchor="Sustainability"
				v-if="sustainability.isDisplayed"
				:sustainability="sustainability" />

			<cost
				class="section fp-noscroll fp-auto-height-responsive"
				data-tooltip="Cost"
				data-anchor="Cost"
				v-if="cost.isDisplayed"
				:cost="cost" />

			<global-footer class="section fp-noscroll fp-auto-height" data-anchor="Footer" />

		</full-page>
	</client-only>
</template>

<script>

	import Hero from '@/components/home/Hero.vue'
	import Safety from '@/components/home/Safety.vue'
	import Speed from '@/components/home/Speed.vue'
	import Technology from '@/components/home/Technology.vue'
	import Sustainability from '@/components/home/Sustainability.vue'
	import Cost from '@/components/home/Cost.vue'

	import { mapState, mapGetters } from 'vuex'

	import { fullpageMixin } from '@/mixins/fullpageMixin.js'

	export default {

		components: {
			Hero,
			Safety,
			Speed,
			Technology,
			Sustainability,
			Cost
		},

		mixins: [fullpageMixin],

		data () {
			return {
				navigationTimeout: null,
				isFpResponsive: false,
				options: {
					navigation: true,
					onLeave: this.onLeave,
					afterResponsive: this.afterResponsive
				}
			}
		},

		created () {
			this.$store.dispatch('home/fetchHomeInfos')
		},

		computed: {
			...mapGetters('home', {
				intro: 'getIntro',
				safety: 'getSafety',
				speed: 'getSpeed',
				technology: 'getTechnology',
				sustainability: 'getSustainability',
				cost: 'getCost'
			})
		},

		methods: {

			/* RESET VIDEOS */
			playVideos (destination) {
				let videos = document.querySelector('.active').querySelectorAll('video')
				if (videos.length && destination.anchor !== 'Safety') {
					videos.forEach(video => {
						video.play()
					})
				}
			},

			afterLoad (origin, destination) {
				document.querySelectorAll('.section')[destination.index].classList.add('complete')
				this.playVideos(destination)
				this.navigationTimeout = setTimeout(_ => {
					document.querySelector('#fp-nav').querySelector('.active') && document.querySelector('#fp-nav').querySelector('.active').classList.remove('active')
				}, 2000)
				this.load.origin = origin.anchor
				this.load.destination = destination.anchor
			},

			afterResponsive (isResponsive) {
				this.isFpResponsive = isResponsive
			},

			onLeave (origin, destination) {
				clearTimeout(this.navigationTimeout)
				this.leave.origin = origin.anchor
				this.leave.destination = destination.anchor
			}
		}
	}
</script>
