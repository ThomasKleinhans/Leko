import contentful from '~/plugins/contentful.js'

export const state = () => ({
	datas: {},
	isLoaded: false
})

export const getters = {

  getYoutubeEmbedURL: (state) => url => {
    const params = new URL(url).searchParams
    const id = params.get('v')
    return 'https://www.youtube.com/embed/' + id + '?autoplay=1&controls=0&playsinline=1&rel=0&showinfo=0'
  },

  getIntro: (state, getters) => ({
  	title: state.datas.introTitle,
  	subhead: state.datas.introSubhead,
  	video: state.datas.introVideo.fields.file.url,
    youtubeVideo: state.datas.introYoutubeVideo ? getters.getYoutubeEmbedURL(state.datas.introYoutubeVideo) : null,
  	isDisplayed: state.datas.introDisplaySection
  }),

  getSafety: state => ({
  	title: state.datas.safetyTitle,
    paragraphs: state.datas.safetyParagraphs.split(/\n\n/g),
  	isDisplayed: state.datas.safetyDisplaySection
  }),

  getSpeed: state => ({
    title: state.datas.speedTitle,
    paragraphs: state.datas.speedParagraphs.split(/\n\n/g),
    firstParagraph: state.datas.speedFirstParagraph,
    secondParagraph: state.datas.speedSecondParagraph,
    image: state.datas.speedImage.fields.file.url,
    isDisplayed: state.datas.speedDisplaySection
  }),

  getTechnology: state => ({
    title: state.datas.technologyTitle,
    paragraphs: state.datas.technologyParagraphs.split(/\n\n/g),
    image: state.datas.technologyImage.fields.file.url,
    bullets: state.datas.technologyBullets,
    bulletsDelay: state.datas.technologyBulletsDelay,
    isDisplayed: state.datas.technologyDisplaySection
  }),

  getSustainability: state => ({
    title: state.datas.sustainabilityTitle,
    paragraphs: state.datas.sustainabilityParagraphs.split(/\n\n/g),
    firstParagraph: state.datas.sustainabilityFirstParagraph,
    secondParagraph: state.datas.sustainabilitySecondParagraph,
    image: state.datas.sustainabilityImage.fields.file.url,
    isDisplayed: state.datas.sustainabilityDisplaySection
  }),

  getCost: state => ({
    title: state.datas.costTitle,
    paragraphs: state.datas.costParagraphs.split(/\n\n/g),
    video: state.datas.costVideo.fields.file.url,
    stats: state.datas.costStats.content,
    isDisplayed: state.datas.costDisplaySection
  })

}

export const mutations = {
	FETCH_HOME_INFOS (state, home) {
		state.datas = home
		state.isLoaded = true
	}
}

export const actions = {

	async fetchHomeInfos ({ commit }) {
		let datas = await contentful.getEntries({ 'content_type': 'homePage' })
		commit('FETCH_HOME_INFOS', datas.items[0].fields)
	}

}
