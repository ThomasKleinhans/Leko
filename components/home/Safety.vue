<template>

	<section class="Safety LayoutTwo-horizontal LayoutTwo-dark">

		<div class="LayoutTwo-media LayoutTwo-size70 Safety-videos" :class="{'is-finished' : isPressAnimationDone}">

			<div class="Safety-video">
				<video class="u-mediaFullSize" playsinline muted preload="auto">
					<source src="@/assets/videos/press-concrete.mp4" type="video/mp4" />
				</video>
				<div class="Safety-pressure">
					<span class="Safety-pressureNumber">{{ concreteNumber }}</span>
					<span class="Safety-pressureUnit">tons</span>
				</div>
				<div class="Safety-videoLabel">Concrete</div>
			</div>
			<transition>
				<span class="Safety-replay" v-if="isPressAnimationDone" @click="pressIncrementation">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" class="Safety-replayIcon">
						<path fill="#0B2819" fill-rule="nonzero" d="M3.2 7h1.6l-2.4 3.889L0 7h1.6c0-3.866 3.224-7 7.2-7S16 3.134 16 7s-3.224 7-7.2 7v-1.556c3.093 0 5.6-2.437 5.6-5.444s-2.507-5.444-5.6-5.444C5.707 1.556 3.2 3.993 3.2 7z"/>
					</svg>
					Replay it
				</span>
			</transition>
			<div class="Safety-video">
				<video class="u-mediaFullSize" playsinline muted preload="auto">
					<source src="@/assets/videos/press-wood.mp4" type="video/mp4" />
				</video>
				<div class="Safety-pressure">
					<span class="Safety-pressureNumber">{{ lekoNumber }}</span>
					<span class="Safety-pressureUnit">tons</span>
				</div>
				<div class="Safety-videoLabel Safety-videoLabel--important">Leko® Technology</div>
			</div>

		</div>

		<div class="LayoutTwo-text LayoutTwo-size30 Safety-text">

			<header>
				<h2 class="h2">{{ safety.title }}</h2>
			</header>

			<div class="LayoutTwo-paragraphs">
				<p class="Paragraph" v-for="paragraph in safety.paragraphs" v-html="$options.filters.nl2br(paragraph)"></p>
			</div>

		</div>

	</section>

</template>

<script>
	import isMobile from '@/services/mobileDetectionService'
	export default {

		props: {
			load: Object,
			leave: Object,
			safety: Object
		},

		data () {
			return {
				isVideoLoaded: false,
				isPressAnimationDone: false,
				lekoPressInterval: null,
				concretePressInterval: null,
				concreteNumber: 1,
				lekoNumber: 1,
				timeout: null
			}
		},

		computed: {
			elements () {
				return {
					safetyVideos: document.querySelector('.Safety').querySelectorAll('video')
				}
			}
		},

		methods: {

			resetPress () {
				const timerDelay = (isMobile()) ? 0 : 600
				setTimeout(() => {
					clearInterval(this.lekoPressInterval)
					clearInterval(this.concretePressInterval)
					this.elements.safetyVideos.forEach(video => {
						video.pause()
						video.currentTime = 10
					})
					clearTimeout(this.timeout)
					this.isPressAnimationDone = true
					this.concreteNumber = 10
					this.lekoNumber = 100
				}, timerDelay)
			},

			pressIncrementation () {
				this.concreteNumber = this.lekoNumber = 1
				this.isPressAnimationDone = false

				this.elements.safetyVideos.forEach(video => {
					video.currentTime = 0
					video.play()
				})

				setTimeout(() => {
					this.lekoPressInterval = setInterval(() => {
						(this.concreteNumber === 10) ? clearInterval(this.lekoPressInterval) : this.concreteNumber++
					}, 220)

					this.concretePressInterval = setInterval(() => {
						this.lekoNumber++
						if (this.lekoNumber === 100) {
							clearInterval(this.concretePressInterval)
							setTimeout(_ => {
								this.isPressAnimationDone = true
							}, 500)
						}
					}, 100)
				})
			}
		},

		watch: {

			'load.destination': function (newVal, oldVal) {
				if (newVal === 'Safety') {
					!this.isPressAnimationDone && this.pressIncrementation()
				}
			},

			'leave.origin': function (newVal, oldVal) {
				(newVal === 'Safety') && this.resetPress()
			}

		}
	}
</script>
