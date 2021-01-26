<template>
	<div class="Projects" ref="wrapper">
		<main role="main">
			<div class="filters">
				<div :class="{'settings-icon':true, 'active':isFiltersOpened}" @click="isFiltersOpened = !isFiltersOpened">
					<icon name="settings-icon" width="25px" height="25px" />
				</div>

				<div class="settings" v-if="isFiltersOpened">

					<transition 
						name="slide-fade" 
						tag="div" 
						v-for="(item, index) in list" :key="item" 
						appear
					>
						<div class="type-project" :style="'transition-delay:'+index*transitionDelay+'ms'">
							<input type="checkbox" :id="'type'+index" :name="'type'+index">
							<label :for="'type'+index">
								<div class="type-icon">
									<icon name="filter-type" width="35px" height="35px" />
								</div>
								<div class="type-name">SINGLE-FAMILY HOME + {{item}}</div>
							</label>
						</div>
					</transition>

					<transition 
						name="slide-fade" 
						tag="div"
						appear
					>
					<div class="settings-icon check">
						<svg width="25px" height="25px" viewBox="0 0 17 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<title>Check</title>
							<g id="Recherche" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="1440/1440_LEKO_CLIMATE-CHANGE_01-Copy-6" transform="translate(-1056.000000, -608.000000)" stroke="#FFFFFF" stroke-width="1.5">
									<g id="Check" transform="translate(1057.000000, 609.000000)">
										<polyline id="Stroke-1544" points="0 6.42801047 4.75758299 12 15 0"></polyline>
									</g>
								</g>
							</g>
						</svg>
					</div>
					</transition>

				</div>
				
			</div>
            <div>
				<div class="project"  v-for="(project) in projects" :key="project" v-on:mouseleave="mouseleave">
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
	data (){
		return{
			isFiltersOpened: false,
			transitionDelay: 100,
			list: [0,1,2,3,4,5]
		}
	},
	mounted () {
		this.$store.dispatch('projects/fetchProjectsInfos')

	},

	updated (){
		const firstProject = document.querySelector(".project:first-child")
		firstProject.classList.add('active')
	},

	computed: {
		...mapGetters('projects', {
			title: 'getTitle',
			projects: 'getProjectsDetails'
		})

	},

	methods: {
		mouseleave () {
			const firstProject = document.querySelector(".project.active")
			if(firstProject){
				firstProject.classList.remove('active')
			}
		}
	}

}
</script>

<style lang="scss" scoped>
//ANIMATIONS

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>