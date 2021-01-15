<template>
	<div class="CovidBanner" ref="covidBanner" :class="{ 'is-expanded': this.expanded }">
		<span class="CovidBanner-title">Covid-19 Update</span>
		<span class="CovidBanner-action CovidBanner-close">Close</span>
		<p class="CovidBanner-content">
			Our health and safety of our employees, suppliers and communities remain our top priority. If you have submitted an application to LEKO, rest assured that your resume will be reviewed by our recruiting team and we will respond as soon as we can. Should your application be successful, you can expect a phone or video call from us. We appreciate your understanding and flexibility. Keep healthly and stay safe. ❤︎
		</p>
		<span class="CovidBanner-action CovidBanner-readMore" @click="expandBanner">{{ this.read }}</span>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				expanded: false,
				bannerHeight: null
			}
		},

		props: {
			leave: Object
		},

		mounted() {
			this.updateHeaderPosition()
		},

		destroyed() {
			this.destroyHeaderPosition()
		},

		methods: {

			expandBanner() {
				this.expanded = !this.expanded
				this.expanded ? document.body.classList.add('has-covidBanner-expanded') : document.body.classList.remove('has-covidBanner-expanded');
				setTimeout( () => this.updateHeaderPosition() )
			},

			updateHeaderPosition () {
				this.bannerHeight = this.$refs.covidBanner.offsetHeight
				document.documentElement.style.setProperty('--covid-banner-height', this.bannerHeight + 'px')
			},

			destroyHeaderPosition () {
				document.documentElement.style.removeProperty('--covid-banner-height')
			}
		},

		computed: {
			read () {
				return this.expanded ? 'Read less' : 'Read more';
			},
		},

		watch: {
			'leave.origin' (newVal) {
				if (newVal === 'Leko') {
					window.removeEventListener('scroll', this.updateHeaderPositionOnScroll)
					this.destroyHeaderPosition()
				}
			},
			'leave.destination' (newVal) {
				(newVal == 'Leko') && this.updateHeaderPosition()
			}
		}
	}
</script>
