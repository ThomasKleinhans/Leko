<template>

	<section class="Cost LayoutTwo-vertical">

		<div class="LayoutTwo-media LayoutTwo-size70">

			<div class="LayoutTwo-mobileMask LayoutTwo-mobileMask--fromLeft u-mediaZoomAnimation LayoutTwo-mobileMask--full">
				<video class="u-mediaFullSize" playsinline muted loop :src="cost.video"></video>
			</div>

			<ul class="Stats Cost-stats" v-if="cost.stats">
				<li class="Stats-item Cost-statsItem" v-for="stat in cost.stats">
					<span><strong>{{ stat.content[0].value }}</strong>{{ stat.content[1].value }}</span>
				</li>
			</ul>

		</div>

		<div class="LayoutTwo-text LayoutTwo-split LayoutTwo-size30 Cost-text">

			<header>
				<h2 class="h2">{{ cost.title }}</h2>
			</header>

			<div class="LayoutTwo-paragraphs">
				<p class="Paragraph" v-for="paragraph in cost.paragraphs" v-html="$options.filters.nl2br(paragraph)"></p>
			</div>

		</div>

	</section>

</template>


<script>
	export default {
		props: {
			cost: Object
		}
	}
</script>
