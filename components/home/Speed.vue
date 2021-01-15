<template>

	<section class="Speed LayoutTwo-vertical">

		<div class="LayoutTwo-text LayoutTwo-split LayoutTwo-size30 Speed-text">

			<header>
				<h2 class="h2">{{ speed.title }}</h2>
			</header>

			<div class="LayoutTwo-paragraphs">
				<p class="Paragraph" v-for="paragraph in speed.paragraphs" v-html="$options.filters.nl2br(paragraph)"></p>
			</div>

		</div>

		<div class="LayoutTwo-media LayoutTwo-size70 u-relative Speed-video u-mediaZoomAnimation">
			<div class="LayoutTwo-mobileMask LayoutTwo-mobileMask--fromLeft">
				<img :src="speed.image" alt="Robot" class="u-mediaFullSize">
			</div>
		</div>

	</section>

</template>

<script>

	export default {
		props: {
			speed: Object
		}
	}

</script>
