import contentful from '~/plugins/contentful.js'

export const state = () => ({
	datas: {},
	isLoaded: false
})

export const getters = {
	getHeaderVideo: state => state.datas.headerVideo.fields.file.url,
	getAboutImage: state => state.datas.aboutImage.fields.file.url,
	getHiringImage: state => state.datas.hiringImage.fields.file.url,
	getPeople: state => ({
		baseline: state.datas.peopleBaseline,
		title: state.datas.peopleTitle,
		carousel: state.datas.peopleCarousel
	})
}

export const mutations = {
	FETCH_TEAM_INFOS (state, datas) {
		state.datas = datas
		state.isLoaded = true
	},
}

export const actions = {
	async fetchTeamInfos ({ commit }) {
		let data = await contentful.getEntries({ 'content_type': 'teamPage' })
		commit('FETCH_TEAM_INFOS', data.items[0].fields)
	}
}
