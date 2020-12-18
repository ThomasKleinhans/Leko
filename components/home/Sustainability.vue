<template>

	<section class="Sustainability LayoutTwo-horizontal LayoutTwo-dark">

		<div class="LayoutTwo-media LayoutTwo-size70 Sustainability-image u-mediaZoomAnimation">
			<div class="LayoutTwo-mobileMask LayoutTwo-mobileMask--fromRight">
				<img :src="sustainability.image" class="u-mediaFullscreen">
			</div>
		</div>

		<div class="LayoutTwo-text LayoutTwo-size30 Sustainability-text">

			<header class="Sustainability-title">
				<h2 class="h2">{{ sustainability.title }}</h2>
			</header>

			<div class="LayoutTwo-paragraphs">
				<p class="Paragraph" v-for="paragraph in sustainability.paragraphs" v-html="$options.filters.nl2br(paragraph)"></p>
			</div>

		</div>

	</section>

</template>

<script>
	export default {
		props: {
			sustainability: Object
		}
	}
</script>
