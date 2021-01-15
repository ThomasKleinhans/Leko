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

			<members
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
	import Members from '@/components/team/Members.vue'
	import Hiring from '@/components/team/Hiring.vue'

	import { fullpageMixin } from '@/mixins/fullpage.js'

	import { mapState, mapGetters } from 'vuex'

	export default {
		components: {
			Hero,
			About,
			Members,
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
