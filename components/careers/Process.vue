<template>

	<section class="Process">

			<div class="Process-inner">

			<div class="TextAnimation Process-text">

				<span class="Subhead Process-subhead u-mb-5">{{ process.subhead }}</span>

				<header class="u-mb-30">
					<h2 class="h2">{{ process.title }}</h2>
				</header>

				<p class="Paragraph Process-paragraph" v-html="$options.filters.nl2br(process.paragraph)"></p>

			</div>

			<ul class="ProcessList">
				<li class="ProcessList-item u-mb-30--lg" v-for="process in process.list">
					<h3 class="ProcessList-itemTitle u-mb-20 u-mb-15--lg u-mb-30--md">{{ process.fields.title }}</h3>
					<p class="Paragraph ProcessList-itemParagraph" v-html="$options.filters.nl2br(process.fields.paragraphs)"></p>
				</li>
			</ul>

		</div>

	</div>


</section>

</template>


<script>
	export default {

		props: {
			process: Object
		}

	}
</script>
