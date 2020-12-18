<template>
	<svg :width="width" :height="height">
		<use v-bind="{'xlink:href':'/sprite.svg#'+name}"/>
	</svg>
</template>

<script>
	export default {
		props: {
			name: String,
			width: {
				type: [Number, String]
			},
			height: {
				type: [Number, String]
			}
		}
	}
</script>
