<template>

	<section class="Hiring" :style="{'background-image' : 'url(' + hiringImage + ')'}">

		<div class="Hiring-inner">

			<div class="Hiring-content">

				<header class="Hiring-heading u-mb-20">
					<hgroup>
						<h3 class="Subhead u-mb-10">Join our team</h3>
						<h2 class="h2 u-color-offWhite">We are hiring!</h2>
					</hgroup>
				</header>

				<nuxt-link tag="a" :to="{ name: 'careers' }" class="Hiring-CTA">Careers</nuxt-link>

			</div>
		</div>

	</section>

</template>


<script>
	export default {

		props: {
			hiringImage: String
		}

	}
</script>
