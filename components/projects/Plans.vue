<template>
	<section class="project-plans LayoutTwo-horizontal LayoutTwo-dark">

		<div class="LayoutTwo-media LayoutTwo-size100 u-mediaZoomAnimation plan-over-container">
			<div class="LayoutTwo-mobileMask LayoutTwo-mobileMask--fromLeft LayoutTwo-mobileMask--full plan-container">
				<img class="plan" :src="plan.fields.file.url" :alt="plan.fields.title">
			</div>
		</div>

	</section>
                


</template>

<script>
	export default {

		props: {
			plan: Object,
		}

	}
</script>

<style lang="scss" scoped>
.project-plans{ 

    .LayoutTwo-media{
		.LayoutTwo-mobileMask{
			@media screen and (max-width: 640px) {
				height: 100%;
				
				&::before{
					content: none;
				}		
			}
		}
    }
    
    background: white;
    color: #111211;
    .plan-over-container{
        height: 100%;
        .plan-container{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .plan{
                width: 80%;
            }
        }
    }
}
</style>