<template>

	<section class="About LayoutTwo-vertical">

		<div class="About-image u-relative LayoutTwo-media LayoutTwo-size50 u-mediaZoomAnimation">
			<img :src="aboutImage" class="u-mediaFullSize">
		</div>

		<div class="About-text LayoutTwo-text LayoutTwo-size50">
			<h2 class="h2">About Leko</h2>
			<p class="Paragraph About-paragraph">
				We are Leko. And we are on a mission to accelerate the world’s transition to sustainable housing. We are committed to revolutionising the way buildings are created by applying technology to overcome the inefficiencies of traditional construction. We won’t stop until we see beautiful, smart and sustainable construction everywhere.
			</p>
		</div>

	</section>

</template>

<script>
	export default {

		props: {
			aboutImage: String
		}

	}
</script>
