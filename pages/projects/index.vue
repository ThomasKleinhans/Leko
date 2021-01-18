<template>
	<div class="Projects" ref="wrapper">
		<main role="main">
            <div>
				<div class="project"  v-for="(project) in projects" :key="project">
					<p :class="{'type':true, 'locked': !project.fields.isActive}">CATEGORIE</p>
					<nuxt-link class="link" v-if='project.fields.isActive' tag="a" :to="'projects/'+project.sys.id">{{project.fields.title}}</nuxt-link>
					<span class="link locked" v-else>{{project.fields.title}}</span>
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
			projects: 'getProjectsDetails'
		})

	}

}
</script>
