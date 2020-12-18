<template>
	<header class="Header">
		<nuxt-link :to="{ name: 'index' }" tag="div" class="Header-logo MainLogo">
			<div class="MainLogo-inline">
				<icon width="77" height="20" name="logo-inline" />
			</div>
			<icon width="17" height="24" name="logo" class="MainLogo-L" />
		</nuxt-link>
		<global-menu />

	</header>
</template>

<script>
	import Menu from '@/components/common/Menu.vue'

	export default {
		components: {
			'global-menu': Menu
		}
	}
</script>
