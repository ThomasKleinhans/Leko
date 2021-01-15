<template>

	<section class="Meet LayoutTwo-vertical">

		<div class="LayoutTwo-text LayoutTwo-size30 LayoutTwo-split">

			<header>
				<h2 class="h2">{{ meet.title }}</h2>
			</header>

			<div class="LayoutTwo-paragraphs">
				<p class="Paragraph" v-for="paragraph in meet.paragraphs" v-html="$options.filters.nl2br(paragraph)"></p>
			</div>

		</div>

		<ul class="LayoutTwo-media LayoutTwo-size70 LayoutTwo-mobileMask LayoutTwo-mobileMask--fromRight LayoutTwo-mobileMask--full Meet-list" :class="{'is-inactive': !isFpResponsive }">

			<li
				class="Meet-card"
				v-for="(profile, key) in meet.profiles"
				@mouseover="playShortVideo(key)"
				@mouseout="stopShortVideo(key)"
				@click="toggleModal(key); playFullVideo(key)">

				<div class="u-mediaZoomAnimation">
					<img class="u-mediaFullSize u-mediaFullSize--absolute Meet-cardImage" :src="profile.fields.thumbnail.fields.file.url" />
				</div>

				<video class="u-mediaFullSize Meet-cardVideo" :src="profile.fields.shortVideo.fields.file.url" playsinline muted loop />

				<div class="Meet-cardWording">

					<strong class="Meet-cardJobTitle">
						{{ profile.fields.jobTitle }}
					</strong>

					<span class="Meet-cardQuotation">
						{{ profile.fields.quotation }}
					</span>

				</div>
			</li>

		</ul>

		<transition>
			<div class="Modal" v-show="isModalVisible" @click="toggleModal">
				<transition>
					<div class="Modal-content" :class="{'Modal-loading' : !fullVideo}" v-show="isModalVisible">
						<video class="Modal-video" :src="fullVideo" playsinline autoplay loop v-if="isModalVisible"></video>
					</div>
				</transition>
			</div>
		</transition>

	</section>

</template>


<script>

	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
	import { modalMixin } from '@/mixins/modal.js'

	export default {

		props: {
			meet: Object,
			load: Object,
			isFpResponsive: Boolean
		},

		mixins: [modalMixin],

		data() {
			return {
				fullVideo: null
			}
		},

		computed: {
			dom () {
				return {
					meetList: document.querySelector('.Meet-list'),
					meetCard: document.querySelectorAll('.Meet-card'),
					fullpage: document.querySelector('.fullpage-wrapper')
				}
			}
		},

		methods: {

			resetShortVideo (video) {
				video.classList.remove('is-visible')
			},

			playShortVideo (key) {
				if( !this.isFpResponsive ) {
					let video = this.dom.meetCard[key].querySelector('video')
					video.currentTime = 0
					video.play()
					video.classList.add('is-visible')
				}
			},

			stopShortVideo (key) {
				if( !this.isFpResponsive ) {
					let video = this.dom.meetCard[key].querySelector('video')
					this.resetShortVideo(video)
					video.pause()
					clearTimeout(this.resetShortVideoTimeout)
				}
			},

			playFullVideo (key) {
				this.fullVideo = this.meet.profiles[key].fields.fullVideo.fields.file.url
			}

		},

		watch: {
			'load.destination': function (newVal, oldVal) {
				if (newVal === 'Meet') {
					setTimeout(_ => this.dom.meetList.classList.remove('is-inactive'), 1000)
				}
			}
		}

	}
</script>
