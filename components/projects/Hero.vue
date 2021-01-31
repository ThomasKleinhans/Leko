<template>

	<section class="project-hero LayoutTwo-horizontal LayoutTwo-dark">

		<div class="LayoutTwo-media LayoutTwo-size70 u-mediaZoomAnimation">
			<div class="LayoutTwo-mobileMask LayoutTwo-mobileMask--fromLeft LayoutTwo-mobileMask--full">
				<img :src="image" class="u-mediaFullscreen HQ-image">
			</div>
		</div>

		<div class="LayoutTwo-text LayoutTwo-size30">

			<header>
				<h1 class="h1">{{name}}</h1>
			</header>

		</div>

	</section>

</template>

<script>
	export default {

		props: {
			name: String,
			image: String
		}

	}
</script>

<style lang="scss" scoped>
.project-hero{
    background: white;
	color: #111211;
	img{
		object-position: center center;
	}
	.LayoutTwo-text{
		display: flex;
		justify-content: center;
	}
	header{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		h1{
			font-size: 6.25rem;
			font-family: "Riposte";
			text-align: center;
		}
	}
}
</style>