export const heroMixin = {

	props: {
		load: Object
	},

	data () {
		return {
			isFirstVideoLoaded: false
		}
	},

	beforeDestroy () {
		document.body.removeAttribute('class')
	},

	methods: {
		loadVideo () {
			this.isFirstVideoLoaded = true
			setTimeout(_ => {
				document.body.classList.add('i')
			}, 1200)
		}
	},

	watch: {
		'load.destination': function (newVal, oldVal) {
			if (newVal === 'Leko') {
				(!this.isFirstVideoLoaded) && this.loadVideo()
				this.$refs.HeroVideo.play()
			}
		}
	}

}
