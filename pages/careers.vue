<template>
	<client-only v-if="$store.state.careers.isLoaded && $store.state.jobs.isLoaded">

		<div>
			<covid-banner :leave="leave" />

			<full-page ref="fullpage" :options="options">

			<hero
				class="section fp-noscroll fp-auto-height-responsive"
				data-anchor="Leko"
				:leave="leave"
				:load="load"
				:intro="intro"/>

			<hq
				class="section fp-noscroll fp-auto-height-responsive"
				data-anchor="HQ"
				:hq="hq"/>

			<meet
				class="section fp-noscroll fp-auto-height-responsive"
				data-anchor="Meet"
				:load="load"
				:isFpResponsive="isFpResponsive"
				:meet="meet" />

			<jobs
				class="section fp-auto-height fp-auto-height-responsive"
				data-anchor="Jobs"
				:isFpResponsive="isFpResponsive"
				:title="jobsTitle"
				:jobs="jobs"
				:categories="categories" />

			<process
				class="section fp-auto-height-responsive"
				data-anchor="Process"
				:process="process" />

			<global-footer class="section fp-no-scroll fp-auto-height" data-anchor="Careers-Footer" />

		</full-page>
	</div>
	</client-only>
</template>

<script>
	import Hero from '@/components/careers/Hero.vue'
	import Hq from '@/components/careers/Hq.vue'
	import Meet from '@/components/careers/Meet.vue'
	import Jobs from '@/components/careers/Jobs.vue'
	import Process from '@/components/careers/Process.vue'
	import CovidBanner from '@/components/careers/CovidBanner.vue'

	import { fullpageMixin } from '@/mixins/fullpage.js'

	import { mapState, mapGetters } from 'vuex'

	export default {
		components: {
			Hero,
			Hq,
			Meet,
			Jobs,
			Process,
			CovidBanner
		},

		mixins: [fullpageMixin],

		data() {
			return {
				isFpResponsive: false
			}
		},

		created () {
			this.$store.dispatch('careers/fetchCareersInfos')
			this.$store.dispatch('jobs/fetchJobs')
		},

		methods: {
			afterResponsive (isResponsive) {
				this.isFpResponsive = isResponsive
			}
		},

		computed: {
			...mapGetters('careers', {
				intro: 'getIntro',
				hq: 'getHQ',
				meet: 'getMeet',
				jobsTitle: 'getJobsTitle',
				process: 'getProcess',
			}),
			...mapGetters('jobs', {
				jobs: 'getList',
				categories: 'getCategories'
			})
		}
	}

</script>
