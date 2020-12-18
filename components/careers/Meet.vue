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

		<ul class="LayoutTwo-media LayoutTwo-size70 LayoutTwo-mobileMask LayoutTwo-mobileMask--fromRight LayoutTwo-mobileMask--full Meet-profiles" :class="{'is-inactive': !isFpResponsive }">

			<li
				class="MeetProfile"
				v-for="(profile, key) in meet.profiles"
				@mouseover="playShortVideo(key)"
				@mouseout="stopShortVideo(key)"
				@click="toggleModal(key); playFullVideo(key)">

				<div class="u-mediaZoomAnimation">
					<img class="u-mediaFullscreen u-mediaFullscreen--absolute MeetProfile-image" :src="profile.fields.thumbnail.fields.file.url" />
				</div>

				<video class="u-mediaFullscreen MeetProfile-video" :src="profile.fields.shortVideo.fields.file.url" playsinline muted loop />

				<div class="MeetProfile-wording">

					<strong class="MeetProfile-jobTitle">
						{{ profile.fields.jobTitle }}
					</strong>

					<span class="MeetProfile-quotation">
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
	import { modalMixin } from '@/mixins/modalMixin.js'

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
			elements () {
				return {
					meetProfile: document.querySelectorAll('.MeetProfile'),
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
					let video = this.elements.meetProfile[key].querySelector('video')
					video.currentTime = 0
					video.play()
					video.classList.add('is-visible')
				}
			},

			stopShortVideo (key) {
				if( !this.isFpResponsive ) {
					let video = this.elements.meetProfile[key].querySelector('video')
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
					setTimeout(_ => {
						document.querySelector('.Meet-profiles').classList.remove('is-inactive')
					}, 1000)
				}
			}
		}

	}
</script>
