<template>
	<div class="Projects" ref="wrapper">
		<main role="main">
			<div class="filters">
				<div :class="{'settings-icon':true, 'active':isFiltersOpened}" @click="isFiltersOpened = !isFiltersOpened">
					<icon name="settings-icon" width="20px" height="20px" />
				</div>

				<div class="settings" v-if="isFiltersOpened">

					<transition 
						name="slide-fade" 
						tag="div" 
						v-for="(item, index) in filters.filters" :key="item.fields.id" 
						appear
					>
						<div class="type-project" :style="'transition-delay:'+index*transitionDelay+'ms'">
							<input v-model="filtersActives" type="checkbox" :checked="filtersActives.includes(item.fields.id)" :id="item.fields.id" name="category" :value="item.fields.id">
							<label :for="item.fields.id">
								<div class="type-icon">
									<img :src="item.fields.icon.fields.file.url" alt="">
								</div>
								<div class="type-name">{{item.fields.name}}</div>
							</label>
						</div>
					</transition>

					<transition 
						name="slide-fade" 
						tag="div"
						appear
					>
					<div v-show="false" :class="{'settings-icon check' :true, 'active': filtersActives.length > 0}">
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
				<div v-show="filtersActives.includes(project.fields.category.fields.id) || filtersActives.length === 0" v-for="(project, index) in projects" :key="project.fields.title" :class="{'project':true,'locked': !project.fields.isActive, 'active': index == 0}" @mouseout="mouseleave()" @mouseleave="showByIndex = null" @mouseenter="showByIndex = index">
					<div class="tags">
						<p class="soon" v-if="!project.fields.isActive" v-show="showByIndex == index">soon</p>
						<p :class="{'type':true, 'locked': !project.fields.isActive}">{{project.fields.category.fields.name}}</p>
					</div>
					<p @click="selectProject(index)" class="link" v-if='project.fields.isActive'>{{project.fields.title}}</p>
					<span class="link locked" v-else>{{project.fields.title}}</span>
			    </div>
            </div>
		</main>
		<transition name="fade" appear>
			<full-page ref="fullpage" v-if="isProjectSelected" :options="{}">

				<hero
					class="section fp-noscroll fp-auto-height-responsive is-light"
					data-anchor="Hero"
					:image="projects[projectSelected].fields.heroImage.fields.file.url"
					:name="projects[projectSelected].fields.title" />

				<category
					class="section fp-noscroll fp-auto-height-responsive is-light"
					data-anchor="Category"
					:leftTitle="projects[projectSelected].fields.infoLeftTitle"
					:leftImage="projects[projectSelected].fields.infoLeftContent.fields.file.url"
					:rightContent="projects[projectSelected].fields.infoRightContent"
					:rightTitle="projects[projectSelected].fields.infoRightTitle" 
					:carousel="projects[projectSelected].fields.infoCarousel"/>

				<statistics
					class="section fp-noscroll fp-auto-height-responsive is-light"
					data-anchor="Statistics"
					:firstBarTitle="projects[projectSelected].fields.statisticsFirstGraphBarTitle"
					:firstRightBarTitle="projects[projectSelected].fields.statisticsFirstGraphBarRightContent"
					:firstLeftBarTitle="projects[projectSelected].fields.statisticsFirstGraphBarLeftContent"
					:secondBarTitle="projects[projectSelected].fields.statisticsSecondGraphBarTitle"
					:secondBarContent="projects[projectSelected].fields.statisticsSecondGraphBarContent"
					:leftCircleContent="projects[projectSelected].fields.statisticsLeftCircleGraphContent"
					:leftCircleTitle="projects[projectSelected].fields.statisticsLeftCircleGraphTitle"
					:trapezoide="projects[projectSelected].fields.statisticsTrapezoideContent"
					:rightCircleContent="projects[projectSelected].fields.statisticsRightCircleGraphContent"
					:rightCircleTitle="projects[projectSelected].fields.statisticsRightCircleGraphTitle"/>

				<plans v-for="(plan, index) in projects[projectSelected].fields.plans" :key="'plan' + index"
					class="section fp-noscroll fp-auto-height-responsive is-light"
					:data-anchor="'Plans'+index"
					:plan="plan"/>

				<infos
					class="section fp-noscroll fp-auto-height-responsive is-light"
					data-anchor="Details"
					:infos="projects[projectSelected].fields.details.content"
					:projectId="projects[projectSelected].sys.id"/>



			</full-page>
		</transition>
		<transition name="fade" appear>
			<div @click="closeProject()" class="background-fullpage" v-if="isProjectSelected"></div>
		</transition>
		<div @click="closeProject()" class="backButton">
			<svg width="18px" height="30px" viewBox="0 0 18 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g id="Page-projet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g id="1440/1440_LEKO_PROJECT-05" transform="translate(-1201.000000, -3827.000000)" fill="#111111" fill-rule="nonzero">
						<g id="Group" transform="translate(580.000000, 3372.000000)">
							<g id="Group-10" transform="translate(490.000000, 330.000000)">
								<polygon id="→" transform="translate(139.840000, 139.840000) rotate(-90.000000) translate(-139.840000, -139.840000) " points="146.8 148.68 154.68 139.84 146.8 131 145.32 132.4 151.16 138.72 125 138.8 125 141 151.16 140.92 145.32 147.28"></polygon>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</div>
		<!--<div @mouseover="isCursorShown = true" @click="isProjectSelected = false; isCursorShown = false" class="close" id="close" v-show="isCursorShown">CLOSE</div>-->
	</div>
</template>

<script>	
import { mapState, mapGetters } from 'vuex'
import Hero from '@/components/projects/Hero.vue'
import Category from '@/components/projects/Category.vue'
import Statistics from '@/components/projects/Statistics.vue'
import Plans from '@/components/projects/Plans.vue'
import Infos from '@/components/projects/Infos.vue'

export default {
	components: {
		Hero,
		Category,
		Statistics,
		Plans,
		Infos
	},
	data (){
	
		return{
			isFiltersOpened: false,
			transitionDelay: 100,
			list: [0,1,2,3,4,5],
			isProjectSelected: false,
			projectSelected: 0,
			filtersActives: [],
			isCursorShown: false,
			showByIndex: 4
		}
	},
	mounted () {
		this.$store.dispatch('projects/fetchProjectsInfos')

	},

	updated (){

		const urlParams = new URLSearchParams(window.location.search);
		if(urlParams.get('id')){
			if(this.projects){
				this.openProject(urlParams.get('id'))
			}
		}
	},

	computed: {
		...mapGetters('projects', {
			filters: 'getFilters',
			projects: 'getProjectsDetails'
		})

	},

	methods: {
		mouseleave () {
			const firstProject = document.querySelector(".project.active")
			if(firstProject){
				firstProject.classList.remove('active')
			}
		},
		selectProject(index) {
			this.isProjectSelected = true
			this.projectSelected = index
		},
		closeProject(){
			history.replaceState({}, document.title, window.location.href.split('#')[0]);
			history.replaceState({}, document.title, window.location.href.split('?')[0]);
			this.isProjectSelected = false
		},
		openProject(id){
			let project = this.projects.filter(s => s.sys.id == id)
			this.projectSelected = this.projects.indexOf(project[0])
			this.isProjectSelected = true
		},
		test(index){
			console.log(index)
		}
		// updateCloseCursor(e){
		// 	e.stopPropagation()
		// 	let cursor = document.getElementById('close')
		// 	cursor.style.top = e.clientY+'px'
		// 	cursor.style.left = e.clientX+'px'
		// }
	}

}
</script>

<style lang="scss" scoped>
//ANIMATIONS

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s;
}

.slide-fade-leave-to{
  transition: all .8s ;
	opacity: 0;
}
.slide-fade-leave{
  transition: all .8s ;
  opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-active {
  transition: all .3s;
}
.fade-leave-active {
  transition: all .2s;
}
.fade-enter, .slide-fade-leave{
  opacity: 0;
}

.background-fullpage{
    position: absolute !important;
    top: 0;
    left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
	background-color: rgba(0, 0, 0, 0.5);
	cursor: pointer; 
}
.fullpage-wrapper{
    position: absolute !important;
    top: 0;
    left: 25%;
	right: 0;
	bottom: 0;
	z-index: 100;
	
}
@media screen and (max-width: 768px) {
	.fullpage-wrapper{

		left: 0;
	}
}

.close{
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 200;
	cursor: none; 
	transition: 0.2s cubic-bezier(.49,.93,.77,1.04);
}

.backButton{
	display: none;
	position: absolute;
	left: 20px;
	top: 10px;
	z-index: 99999;
	transform: rotate(-90deg);
	cursor: pointer;
	@media screen and (max-width: 768px) {
		display: inline;
	}
}
</style>