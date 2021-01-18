<template>
	<div class="Projects" ref="wrapper">
		<main role="main">
			{{currentProject.fields.title}}
		</main>
	</div>
</template>

<script>	
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
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
