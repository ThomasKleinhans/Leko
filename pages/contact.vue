<template>
	<div>
		<div ref="wrapper" class="Contact LayoutTwo-vertical">
			<main role="main">
				<section class="Contact-map LayoutTwo-media">
					<Map class="Map" />
					<div class="Contact-map-text">
						<p class="Subhead u-mb-30 u-mb-15--md">Our location</p>
						<h2 class="h2">Foetz, Lux.</h2>
					</div>
				</section>

				<section class="Contact-text LayoutTwo-text">
					<h1 class="h2">Where the magic happens.</h1>
					<p class="h4 u-mb-20">Come take a look at the Leko Factory & offices, where it all happens.</p>
					<p class="h4 Contact-links">
						<a href="mailto:hello@lekolabs.com">hello@lekolabs.com</a>
					</p>
				</section>

			</main>
		</div>
		<global-footer />
	</div>
</template>

<script>
	import Map from '@/components/contact/Map.vue'

	export default {

		components: { Map },

		mounted () {
			setTimeout( () => this.$refs.wrapper.classList.add('active') )
		}

	}
</script>
