<template>
	<client-only v-if="$store.state.projects.isLoaded">
		<full-page ref="fullpage" :options="{}">

			<hero
				class="section fp-noscroll fp-auto-height-responsive is-light"
				data-anchor="HQ"
				:image="currentProject.fields.heroImage.fields.file.url"
				:name="currentProject.fields.title" />

			<hero
				class="section fp-noscroll fp-auto-height-responsive is-light"
				data-anchor="HQ"
				:image="currentProject.fields.heroImage.fields.file.url"
				:name="currentProject.fields.title" />

		</full-page>
	</client-only>
</template>

<script>	
import { mapState, mapGetters, mapActions } from 'vuex'
import Hero from '@/components/projects/Hero.vue'

export default {	
	layout : 'project-layout',
	components: {
		Hero,
	},

	data () {
		return{
			id: this.$route.params.id
		}
	},
	mounted () {
		this.$store.dispatch('projects/fetchProjectsInfos')
		if(this.currentProject == false){
			this.$router.push('/projects');
		}
	},

	computed: {
		...mapGetters('projects', {
			allProjects: 'getProjectsDetails'
		}),
		currentProject () {
			for(let i = 0; i < this.allProjects.length; i++){
				if(this.allProjects[i].sys.id == this.id){
					return this.allProjects[i]
				}
			}
			return false
		}
	}
}
</script>
