import contentful from '~/plugins/contentful.js'

export const state = () => ({
	datas: {},
	isLoaded: false
})

export const getters = {

  getIntro: state => ({
		subhead: state.datas.introSubhead,
		title: state.datas.introTitle,
		video: state.datas.introVideo.fields.file.url
  }),

  getHQ: (state, getters) => ({
  	title: state.datas.hqTitle,
  	paragraphs: state.datas.hqParagraphs.split(/\n\n/g),
  	randomImage: getters.getHQRandomImage(state.datas.hqImages)
  }),

  getHQRandomImage: state => img => {
  	const images = Object.values(img), arr = []
  	for (const image of images) {
  		arr.push(image.fields.file.url)
  	}
  	return arr[Math.floor(Math.random() * arr.length)];
  },

  getMeet: state => ({
  	subhead: state.datas.meetSubhead,
  	title: state.datas.meetTitle,
    paragraphs: state.datas.meetParagraphs.split(/\n\n/g),
  	profiles: state.datas.meetProfileDescription
  }),

  getJobsTitle: state => state.datas.jobOffersTitle,

  getProcess: state => ({
  	subhead: state.datas.processSubhead,
  	title: state.datas.processTitle,
  	paragraph: state.datas.processParagraph,
  	list: state.datas.processList
  })
}

export const mutations = {
	FETCH_CAREERS_INFOS (state, datas ) {
		state.datas = datas
		state.isLoaded = true
	},

}

export const actions = {

	async fetchCareersInfos ({ commit }) {
		let datas = await contentful.getEntries({ 'content_type': 'careersPage' })
		commit('FETCH_CAREERS_INFOS', datas.items[0].fields)
	}

}
