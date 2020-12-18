import { underscoreToString } from '@/services/strings.js'
import { countries } from '@/services/countries.js'

export const state = () => ({
	datas: {},
	isLoaded: false
})

export const getters = {

	getNewLabel: state => date => {
		let days30 = 30 * 24 * 60 * 60 * 1000
		let todayDate = new Date().getTime();
		let jobDate = new Date(date).getTime()
		return ((jobDate + days30) > todayDate)
	},

	getCategories: state => {
		let categories = new Set()

		state.datas.map( job => {
			let category = job.companyLibraries.length ? job.companyLibraries[0].item.name : null
			categories.add(category)
		})

		return categories
	},

  getList: (state, getters) => {
		const jobs = Object.values(state.datas);
		let list = []
		const language = process.env.LANGUAGE

		for (const job of jobs) {
			let obj = {
				title: job.information.title[language],
				requirements: job.information.requirements.mandatory[language],
				description: job.information.description[language],
				responsibilities: job.information.responsibilities[language],
				country: countries[job.information.address.country] || null,
				type: underscoreToString(job.information.contract.type) || null,
				category: (job.companyLibraries.length) ? job.companyLibraries[0].item.name : null,
				link: job.url.canonical,
				isNew: getters.getNewLabel(job.startDate)
			}
			list.push(obj)
		}

		return list
  },

  getNumber: state => state.datas.length,

  getListByCategory: (state, getters) => category => {
  	if(category === "All") {
  		return getters.getList
  	} else {
  		return getters.getList.filter( job => job.category === category )
  	}
  }
}

export const mutations = {
	FETCH_JOBS (state, datas) {
		state.datas = datas
		state.isLoaded = true
	}
}

export const actions = {

	async fetchJobs ({ commit }) {
		let url = process.env.SKEELED_CAREERS_URL
		let apiKey = process.env.SKEELED_API_KEY
		let options = {
		  method: 'GET',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json;charset=UTF-8',
		    'x-api-key' : apiKey
		  }
		};
		let response = await fetch(url, options)
		let datas = await response.json();
		commit('FETCH_JOBS', datas.data)
	}
}
