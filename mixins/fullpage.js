import isMobile from '@/services/mobileDetectionService'

export const fullpageMixin = {

	data () {
		return {
			load: {destination: null, origin: null},
			leave: {destination: null, origin: null},
			options: {
				licenseKey: 'DAA603A4-528044C0-8F4A9DAB-278FF9C6',
				scrollingSpeed: 800,
				responsiveWidth: 993,
				animateAnchor: false,
				recordHistory: false,
				lockAnchors: true,
				scrollOverflow: true,
				scrollOverflowOptions: {
					disablePointer: (isMobile()) ? false : true,
				},
				afterLoad: this.afterLoad,
				onLeave: this.onLeave,
				afterResponsive: this.afterResponsive
			}
		}
	},

	methods: {
		afterLoad (origin, destination) {
		  document.querySelectorAll('.section')[destination.index].classList.add('complete')
		  this.load.origin = origin.anchor
		  this.load.destination = destination.anchor
		},
		onLeave (origin, destination) {
			this.leave.origin = origin.anchor
			this.leave.destination = destination.anchor
		}
	}
}
