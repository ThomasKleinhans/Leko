<template>

	<section class="project-statistics LayoutTwo-horizontal LayoutTwo-dark">

		<div class="LayoutTwo-text LayoutTwo-size30">
			<header class="bars">
				<div class="bar duo">
					<p class="left barStat">{{firstLeftBarTitle}}</p>
					<p class="right barStat">{{firstRightBarTitle}}</p>
				</div>
				<h2 class="title">{{firstBarTitle}}</h2>
			</header>
			<header class="bars">
				<div class="bar solo">
					<p class="barStat">{{secondBarContent}}</p>
				</div>
				<h2 class="title">{{secondBarTitle}}</h2>
			</header>
		</div>
		<div class="LayoutTwo-text LayoutTwo-size30">
			<header class="circles">
				<div class="firstCircle">
					<div class="circle">
						{{leftCircleContent}}
					</div>
					<div class="title">
						{{leftCircleTitle}}
					</div>
				</div>
				<div class="trapeze">
					{{trapezoide}}
				</div>
				<div class="secondCircle">
					<div class="circle">
						{{rightCircleContent}}
					</div>
					<div class="title">
						{{rightCircleTitle}}
					</div>
				</div>
			</header>
		</div>

	</section>

</template>

<script>
	export default {

		props: {
			firstBarTitle: String,
			firstRightBarTitle: String,
			firstLeftBarTitle: String,
			secondBarContent: String,
			secondBarTitle: String,
			leftCircleContent: String,
			leftCircleTitle: String,
			rightCircleContent: String,
			rightCircleTitle: String,
			trapezoide: String
		}

	}
</script>

<style lang="scss" scoped>
.project-statistics{
    background: white;
	color: #111111;
	img{
		object-position: center center;
	}
	.LayoutTwo-text{
		height: calc( 100vh * 1/2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 10vw;
		@media screen and (max-width: 1400px) {
			padding: 0 2vw;
		}

		header{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			max-width: none;
			margin-bottom: 20px;

			&.bars{
				font-size: 40px;
			}

			.bar{
				display: flex;
				width: 550px;
				margin-right: 20px;
				
				@media screen and (max-width: 1090px) {
					width: 480px;
				}

				@media screen and (max-width: 990px) {
					margin-right: 5px;
					width: 400px;
				}
				@media screen and (max-width: 800px) {
					margin-right: 5px;
					width: 350px;
				}
				
				@media screen and (max-width: 640px) {
					width: 480px;
				}
				

				.barStat{
					display: flex;
					align-items: center;
					justify-content: center;
					height: 50px;
					width: 100%;
					text-transform: uppercase;
					font-size: 12px;

					&.left{
						background: #111111;
						width: 50%;
						color: white;
						justify-content: left;
						padding-left: 20px;
					}
					&.right{
						width: 50%;
						color: #CCCCCC;
						background: transparent linear-gradient(90deg, #FFFFFF00 0%, #EDEDED 100%) 0% 0% no-repeat padding-box;
					}
				}

				&.solo{
					.barStat{
						padding-left: 20px;
						justify-content: left;
						background: #EDEDED 0% 0% no-repeat padding-box;
					}
				}
			}
			

			.title{
				margin-left: 20px;
				font-size: 40px;
				letter-spacing: -2px;	
				@media screen and (max-width: 990px) {
					margin-left: 0px;
				}
			}

			&.circles{
				display: flex;
				align-items: flex-end;
				justify-content: space-between;

				.firstCircle, .secondCircle{
					text-align: center;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.circle{
    					padding: 0 20px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 9999px;
						font-size: 12px;
					}

					.title{
						margin-top: 50px;
						margin-left: 0;
					}
				}

				.trapeze{
					display: flex;
					text-align: center;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 0;
					z-index: -1;
					width: 100%;
					height: 192px;
					border-radius: 9999px;
					background: transparent linear-gradient(90deg, #FFFFFF00 0%, #EDEDED 100%) 0% 0% no-repeat padding-box;
					opacity: 0.6;
					color: #B8B8B8;
					font-size: 12px;
					padding: 0 30%;
					&::after{
						width: 80%;
						height: 60px;
						background: #FFFFFF;
						content: " ";
						transform: rotate(-3deg);
						transform-origin: center right;
						position: absolute;
						top: -62px;
						z-index: 1;
					}
				}

				.firstCircle{
					.circle{
						font-size: 12px;
						background: #EDEDED;
						height: 142px;
						width: 142px;
					}
				}
				.secondCircle{
					.circle{
						color: #EDEDED;
						background: #111111;
						height: 192px;
						width: 192px;
					}
				}

				@media screen and (max-width: 640px) {
					.trapeze{
						height: 120px;
						width: 90%;
						&::after{
							transform: rotate(-5deg);
						}
					}
					.firstCircle{
						.circle{
							height: 80px;
							width: 80px;
						}
					}
					.secondCircle{
						.circle{
							height: 120px;
							width: 120px;
						}
					}
				}
			}

			
			&.bars{
				@media screen and (max-width: 670px) {
					flex-direction: column;
					align-items: flex-start;

					.bar{
						width: 100%;
					}

					.title{
						margin: 0px;
					}
				}
			}
			

		}
	}
}
</style>