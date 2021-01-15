<template>

	<section class="HQ LayoutTwo-horizontal LayoutTwo-dark">

		<div class="LayoutTwo-media LayoutTwo-size70 u-mediaZoomAnimation">
			<div class="LayoutTwo-mobileMask LayoutTwo-mobileMask--fromLeft LayoutTwo-mobileMask--full">
				<img :src="hq.randomImage" class="u-mediaFullSize HQ-image">
			</div>
		</div>

		<div class="LayoutTwo-text LayoutTwo-size30">

			<header>
				<h2 class="h2" v-html="$options.filters.nl2br(hq.title)"></h2>
			</header>

			<div class="LayoutTwo-paragraphs">
				<p class="Paragraph" v-for="paragraph in hq.paragraphs" v-html="$options.filters.nl2br(paragraph)"></p>
			</div>

		</div>

	</section>

</template>

<script>
	export default {

		props: {
			hq: Object
		}

	}
</script>
