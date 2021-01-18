<template>
	<div class="Projects" ref="wrapper">
		<main role="main">
            <div>
				<div class="project" v-for="(project) in projectsDetails" :key="project">
					<nuxt-link tag="a" :to="'projects/'+project.sys.id">{{project.fields.title}}</nuxt-link>
					<span></span>
			    </div>
            </div>
		</main>
	</div>
</template>

<script>	
import { mapState, mapGetters } from 'vuex'

export default {
	mounted () {
		this.$store.dispatch('projects/fetchProjectsInfos')
	},

	computed: {
		...mapGetters('projects', {
			title: 'getTitle',
			projectsDetails: 'getProjectsDetails'
		})
	}

}
</script>
