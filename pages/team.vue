<template>
	<client-only v-if="$store.state.team.isLoaded">
		<full-page ref="fullpage" :options="options">

			<hero
				class="section fp-noscroll fp-auto-height-responsive"
				data-anchor="Leko"
				:load="load"
				:headerVideo="headerVideo" />

			<about
				class="section fp-noscroll fp-auto-height-responsive"
				data-anchor="About"
				:aboutImage="aboutImage" />

			<employees
				class="section fp-noscroll fp-auto-height-responsive"
				data-anchor="People"
				:people="people" />

			<hiring
				class="section fp-noscroll fp-auto-height-responsive"
				data-anchor="Hiring"
				:hiringImage="hiringImage" />

			<global-footer class="section fp-noscroll fp-auto-height" />

		</full-page>
	</client-only>
</template>

<script>
	import Hero from '@/components/team/Hero.vue'
	import About from '@/components/team/About.vue'
	import Employees from '@/components/team/Employees.vue'
	import Hiring from '@/components/team/Hiring.vue'

	import { fullpageMixin } from '@/mixins/fullpageMixin.js'

	import { mapState, mapGetters } from 'vuex'

	export default {
		components: {
			Hero,
			About,
			Employees,
			Hiring
		},

		mixins: [fullpageMixin],

		mounted () {
			this.$store.dispatch('team/fetchTeamInfos')
		},

		computed: {
			...mapGetters('team', {
				headerVideo: 'getHeaderVideo',
				aboutImage: 'getAboutImage',
				hiringImage: 'getHiringImage',
				people: 'getPeople'
			})
		}
	}

</script>
