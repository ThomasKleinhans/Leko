<template>

	<section class="project-hero LayoutTwo-horizontal LayoutTwo-dark">

		<div class="LayoutTwo-text LayoutTwo-size30">
			<header>
				<div class="text left">
					<p class="content"><img :src="leftImage" alt=""></p>
					<h2 class="title">{{leftTitle}}</h2>
				</div>
				<div class="text left">
					<p class="content">{{rightContent}}</p>
					<h2 class="title">{{rightTitle}}</h2>
				</div>
			</header>

		</div>

		<div class="LayoutTwo-media LayoutTwo-size70 u-mediaZoomAnimation">
			<div class="LayoutTwo-mobileMask LayoutTwo-mobileMask--fromLeft LayoutTwo-mobileMask--full">
				<carousel :images="carousel"/>
			</div>
		</div>


	</section>

</template>

<script>
	import Carousel from './Carousel.vue'

	export default {
		components:{
			Carousel
		},

		props: {
			leftTitle: String,
			leftImage: String,
			rightTitle: String,
			rightContent: String,
			carousel: Array
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
		height: calc( 100vh * 1/2);
		display: flex;
		justify-content: center;
		&::after{
			width: 100%;
			height: 80px;
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			background: rgb(240,240,240);
			background: linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 100%);
			z-index: 99999;
		}
	}
	.LayoutTwo-media{
		height: calc( 100vh * 1/2);
		.LayoutTwo-mobileMask{
			@media screen and (max-width: 640px) {
				height: 100%;
				
				&::before{
					content: none;
				}		
			}
		}
		.u-mediaFullscreen{
			object-position: center bottom;
		}
	}
	header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		@media screen and (max-width: 640px) {
			flex-direction: column;	
		}

		.text{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 100%;
			.content{
				display: flex;
				align-items: center;
				justify-content: center;
				height: 50px;
				font-size: 40px;
				letter-spacing: -2px;
				img{
					height: 40px;
				}
			}
			.title{
				margin-top: 10px;
				font-size: 14px;
				font-weight: 200;
				text-transform: uppercase;
			}

					
			
		}

	}
}
</style>