<template>

	<client-only>

		<GmapMap
		:center="position"
		:zoom="zoom"
		@click="isInfoWinOpen=false"
		:options="{
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			styles: this.styles
		}">

			<GmapMarker
			:key="index"
			v-for="(m, index) in markers"
			:position="m.position"
			:clickable="true"
			:icon="{url:require('@/assets/svg/marker.svg'),origin: {x: 0, y: -100}}"
			@click="center=m.position, isInfoWinOpen=!isInfoWinOpen"
			/>

				<gmapInfoWindow
				@closeclick="isInfoWinOpen=false"
				:position="position"
				:opened="isInfoWinOpen"
				:options="{
					pixelOffset: {
						height: -30
					}
				}">

					<div class="Map-infoWindow">
						<p class="h5 u-mb-5 Map-infoWindow-title">Leko Labs SA</p>
						<p class="Paragraph">
							Technoport - Bâtiment 1<br />
							Rue de l'Industrie<br />
							3895 Foetz, Luxembourg
						</p>
					</div>

				</gmapInfoWindow>

			</GmapMap>

	</client-only>

</template>

<script>
	import styleJson from '@/components/contact/partials/style.json'
	const position = { lat: 49.525372, lng: 6.014068 }

	export default {

		data () {
			return {
				isInfoWinOpen: false,
				position,
				zoom: 13,
				markers: [{
					position
				}],
				styles: styleJson
			}
		}
	}

</script>
