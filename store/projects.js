import contentful from '~/plugins/contentful.js'

export const state = () => ({
    datas: {},
    projectsDetails: {},
	isLoaded: true,
	currentProject : {}
})

export const getters = {
    getTitle: state => state.datas.title,
    getProjectsDetails: state => state.projectsDetails,
	getCurrentProject: state => state.currentProject
}

export const mutations = {
	FETCH_PROJECTS_FILTERS (state, datas) {
		state.datas = datas
		state.isLoaded = true
	},
	FETCH_PROJECTS_DETAILS (state, datas) {
		state.projectsDetails = datas
	},
	FETCH_CURRENT_PROJECT (state, datas) {
		state.currentProject = datas
	}
}


export const actions = {
	async fetchProjectsInfos ({ commit }) {
		let dataFilters = await contentful.getEntries({ 'content_type': 'projectsFilters' })
        
        commit('FETCH_PROJECTS_FILTERS', dataFilters.items[0].fields)

        let dataDetails = await contentful.getEntries({ 
            'content_type': 'projectsDetails',
            order: 'sys.createdAt'
        })
        
        commit('FETCH_PROJECTS_DETAILS', dataDetails.items)
        
	}
}
