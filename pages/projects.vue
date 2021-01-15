<template>
	<div class="Projects" ref="wrapper">
		<main role="main">
            <div>
                {{title}}
				<div v-for="(project) in projectsDetails" :key="project">{{project.fields.title}}</div>
            </div>
		</main>
	</div>
</template>

<script>	
import { mapState, mapGetters } from 'vuex'

export default {

	mounted () {
		setTimeout(() => {
			this.$refs.wrapper.classList.add('active')
		})
	},

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
