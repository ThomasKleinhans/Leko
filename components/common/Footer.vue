<template>
	<footer class="Footer" role="contentinfo">
		<div class="Footer-informations">
			<icon width="21" height="29" name="logo" class="Footer-logo u-mb-20 u-mb-15--xs" />
			<p class="Paragraph Paragraph--smaller">
				We are committed to revolutionising the way buildings are created by applying technology to overcome the inefficiencies of traditional construction.
			</p>
		</div>
		<div class="Footer-nav">
			<nav>
				<ul class="Footer-links">
					<li><nuxt-link tag="a" class="Footer-link" :to="{ name: 'index' }">Home</nuxt-link></li>
					<li><nuxt-link tag="a" class="Footer-link" :to="{ name: 'team' }">We are Leko</nuxt-link></li>
					<li><nuxt-link tag="a" class="Footer-link" :to="{ name: 'careers' }">Careers</nuxt-link></li>
					<li><nuxt-link tag="a" class="Footer-link" :to="{ name: 'contact' }">Contact us</nuxt-link></li>
				</ul>
			</nav>
		</div>
			<ul class="Footer-social">
				<li><a class="Footer-link" href="https://www.facebook.com/lekolabs" target="_blank" rel="noopener noreferer">Facebook</a></li>
				<li><a class="Footer-link" href="https://www.linkedin.com/company/lekolabs" target="_blank" rel="noopener noreferer">LinkedIn</a></li>
				<li><a class="Footer-link" href="https://www.youtube.com/channel/UCyeWg1p_Z5UnUxd5vlT6-Ug/videos" target="_blank" rel="noopener noreferer">Youtube</a></li>
			</ul>
			<div class="Footer-form">
				<subscribe-form />
			</div>
		<div class="Footer-bottom">
			<div>
				<nuxt-link tag="a" :to="{ name: 'legal' }" class="Footer-legalLink u-mb-10">Legal mentions</nuxt-link><br>
				<span class="Footer-copyright">Leko © 2020. All rights reserved.</span>
			</div>
			<span class="Footer-backToTop" @click="this.goToTheSky">
				Back to top
				<icon width="10" height="11" name="arrow" class="Footer-backToTopIcon" />
			</span>
		</div>
	</footer>
</template>


<script>
	export default {

		methods: {
			goToTheSky() {
				window.scrollTo(0, 0)
				if (typeof fullpage_api !== 'undefined') {
					fullpage_api.moveTo(1)
				}
			}
		}
	}
</script>
