<template>

	<section class="Employees">

		<header class="Employees-heading u-mb-50 u-mb-30--md">
			<hgroup class="TextAnimation Employees-h">
				<h3 class="Subhead u-mb-10 u-color-lightGreenishBlue">{{ people.baseline }}</h3>
				<h2 class="h2 u-color-offWhite">{{ people.title }}</h2>
			</hgroup>
		</header>

		<div class="Employees-list">
			<carousel
				ref="employeesCarousel"
				:perPageCustom="[[320, 2.4], [460, 3.3], [1110, 4.2]]"
				:paginationEnabled="false"
				:navigationEnabled="true"
				:scrollPerPage="true"
				:navigationClickTargetSize="0"
				:speed="600">
				<slide :key="person.name" v-for="person in this.people.carousel" class="Employees-listItem">
					<img :src="person.fields.file.url" class="Employees-listImg">
					<h3 class="h3 u-mb-15 u-mb-10--md Employees-listName">{{ person.fields.title }}</h3>
					<h4 class="h4 u-mb-10 u-color-lightGreenishBlue">{{ person.fields.description }}</h4>
			</slide>
		</carousel>
	</div>

</section>

</template>

<script>
	export default {

		props: {
			destination: String,
			people: Object
		}

	}
</script>
