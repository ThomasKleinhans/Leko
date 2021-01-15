<template>

	<section class="Jobs">

		<div class="Jobs-inner">

			<header class="TextAnimation u-textCenter u-mb-50 u-mb-30--lg">
				<h2 class="h2">{{ title }}</h2>
			</header>

			<div class="Jobs-filter" @click="isFilterOpen = !isFilterOpen" v-if="!categories.has(null)">
				<span class="Jobs-filterCurrent" :class="{'is-open' : isFilterOpen}">{{ category ? category : 'All' }}</span>
				<transition>
					<ul class="Jobs-filterList" v-if="isFilterOpen">
						<li class="Jobs-filterListItem" @click="filter('All')">All</li>
						<li class="Jobs-filterListItem" v-for="category in categories" @click="filter(category)">{{ category }}</li>
					</ul>
				</transition>
			</div>

			<ul class="Jobs-list" :style="{ '--JobsLength' : detailsDisplay.length}">

				<li v-for="(job, key) in jobsList(category)" class="Jobs-listItem Job u-mb-30">

					<transition>
						<div class="Job-extract" @click="toggleDetails(key)" v-show="!detailsDisplay[key]">

								<div class="Job-subhead u-mb-5">
									<div class="Job-newLabel" v-if="job.isNew">
										<span class="Job-newLabelText">new</span>
									</div>
									<span class="h5 Job-category u-mb-0">{{ job.category }}</span>
								</div>

								<h3 class="h3 Job-title u-textUppercase">{{ job.title }}</h3>

						</div>
					</transition>

					<transition>
						<div class="Job-details" v-if="detailsDisplay[key]">

							<div class="Job-side">

								<div class="Job-subhead u-mb-5">
									<div class="Job-newLabel" v-if="job.isNew">
										<span class="Job-newLabelText">new</span>
									</div>
									<span class="h5 Job-category u-mb-0">{{ job.category }}</span>
								</div>

								<h3 class="h3 Job-title u-textUppercase u-mb-20 u-color-lightGreenishBlue" @click="toggleDetails(key)">{{ job.title }}</h3>

								<div class="u-mb-30" v-if="job.country">
									<span class="h5 Job-sideTitle u-mb-5">Country</span>
									<p class="Paragraph">{{ job.country }}</p>
								</div>

								<div class="u-mb-30" v-if="job.type">
									<span class="h5 Job-sideTitle u-mb-5">Contract type</span>
									<p class="Paragraph u-textCapitalize">{{ job.type }}</p>
								</div>

								<a :href="job.link" class="Job-link Job-link--desk" target="_blank">Apply</a>

							</div>

							<div class="Job-main">

								<div class="u-mb-30">
									<span class="h5 u-block u-color-lightGreenishBlue u-textUppercase u-mb-5">Description</span>
									<div class="Paragraph" v-html="$options.filters.nl2br(job.description)"></div>
								</div>

								<div class="u-mb-30">
									<span class="h5 u-block u-color-lightGreenishBlue u-textUppercase u-mb-5">Responsabilities</span>
									<div class="List" v-html="$options.filters.nl2li(job.responsibilities)"></div>
								</div>

								<div class="u-mb-30">
									<span class="h5 u-block u-color-lightGreenishBlue u-textUppercase u-mb-5">Requirements</span>
									<div class="List" v-html="$options.filters.nl2li(job.requirements)"></div>
								</div>

								<a :href="job.link" class="Job-link Job-link--mobile" target="_blank">Apply</a>

							</div>

						</div>
					</transition>

				</li>

			</ul>

		</div>

	</section>

</template>

<script>
	import isMobile from '@/services/mobileDetectionService'

	import { mapGetters } from 'vuex'

	export default {

		props: {
			jobs: Array,
			categories: Set,
			title: String,
			isFpResponsive: Boolean
		},

		data() {
			return {
				detailsDisplay: [],
				category: 'All',
				debounce: false,
				isFilterOpen: false
			}
		},

		mounted () {
			const jobsNumber = new Array(this.jobs.length).fill(false)
			this.detailsDisplay = [...jobsNumber]

			setTimeout( () => {
				fullpage_api.reBuild()
			})
		},

		methods: {

			toggleDetails (key) {

				if (this.debounce) return

				this.detailsDisplay.splice(key, 1, !this.detailsDisplay[key]);

				if (!this.isFpResponsive) {
					this.debounce = true;

					let position, delay;

					if (this.detailsDisplay[key]) {
						position = -(document.querySelectorAll('.Job')[key].offsetTop)
						delay = 1400
					} else {
						position = 0
						delay = 400
					}

					setTimeout(function () {
						let instance = fullpage_api.getActiveSection().item.querySelector('.fp-scrollable').fp_iscrollInstance;
						instance.scrollTo(0, position , 1000);
						instance.refresh();
					}, delay);

					setTimeout(() => {
						fullpage_api.reBuild()
			    	this.debounce = false;
					}, 1600)

				} else {
					this.debounce = false
				}

			},

			filter (category) {
				this.category = category
				this.detailsDisplay.fill(false)
				if (!this.isFpResponsive) {
					setTimeout(_ => {
						fullpage_api.reBuild()
					})
				}
			}

		},

		computed: {
			...mapGetters('jobs', {
				jobsList: 'getListByCategory'
			})
		}

	}

</script>
