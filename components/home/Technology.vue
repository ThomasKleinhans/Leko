<template>

	<section class="Technology LayoutTwo-vertical" :style="{'--delai': technology.bulletsDelay + 's'}">

		<div class="Technology-media LayoutTwo-media LayoutTwo-size70 u-relative Technology-image u-mediaZoomAnimation">
			<div class="LayoutTwo-mobileMask LayoutTwo-mobileMask--fromLeft">
				<img :src="technology.image" :alt="technology.title" class="u-mediaFullscreen">
			</div>
		</div>

		<div class="LayoutTwo-text LayoutTwo-size30 Technology-text">

			<div class="Technology-timer TechnologyTimer" v-if="technology.bullets">
				<ul class="TechnologyTimer-list">
					<li class="TechnologyTimer-listItem Paragraph" v-for="(bullet, key) in bullets" :key="bullet">
						<transition><span class="timer" v-show="counter == key + 1">{{ bullet }}</span></transition>
					</li>
				</ul>
				<div class="TechnologyTimer-lines" ref="techLines">
					<div v-for="(bullet, key) in bullets" :key="bullet" class="TechnologyTimer-linesItem" :class="{'is-active': (counter == key + 1) , 'is-finished': (counter >= key + 2)}"></div>
				</div>
			</div>

			<header>
				<h2 class="h2">{{ technology.title }}</h2>
			</header>

			<div class="LayoutTwo-paragraphs">
				<p class="Paragraph" v-for="paragraph in technology.paragraphs" v-html="$options.filters.nl2br(paragraph)"></p>
			</div>

		</div>

	</section>

</template>

<script>

	export default {

		props: {
			load: Object,
			technology: Object
		},

		data () {
			return {
				counter: 0,
				interval: null,
			}
		},

		methods: {
			initTechTimer (n) {
				this.counter = n
				this.interval = setInterval(_ => {
					if (this.counter === 3) {
						this.counter = 0
						setTimeout(() => this.counter = 1, 20)
					} else this.counter++
				}, this.technology.bulletsDelay * 1000)
			},

			updateTechSlider (n) {
				clearInterval(this.interval)
				this.counter = 0
				setTimeout(() => this.initTechTimer(n), 20)
			}
		},

		computed: {
			bullets() {
				return this.technology.bullets.split(/\n/g)
			}
		},

		watch: {
			'load.destination': function(newVal) {
				if (newVal === 'Technology') {
					setTimeout(() => this.initTechTimer(1), 1300)
				} else {
					clearInterval(this.interval)
					this.counter = 0
				}
			},

		}
	}
</script>
