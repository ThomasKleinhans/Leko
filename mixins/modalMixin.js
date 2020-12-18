import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export const modalMixin = {

	data () {
		return {
			isModalVisible: false
		}
	},

	methods: {
		toggleModal (e) {
			this.isModalVisible = !this.isModalVisible

			if (this.isFpResponsive) {
				this.elements.fullpage.classList.toggle('is-fixed')
			}

			if (this.isModalVisible) {
				disableBodyScroll(document.querySelector('.Modal'))
				fullpage_api.setAllowScrolling(false)
			} else {
				enableBodyScroll(document.querySelector('.Modal'));
				fullpage_api.setAllowScrolling(true)
			}

		}
	}

}
