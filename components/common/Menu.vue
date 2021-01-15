<template>

	<div class="Menu">

		<div @click="toggleMenu">
			<icon width="22" height="19" name="burger-icon" class="Menu-icon" />
		</div>

		<transition>
			<div class="Menu-overlay" v-show="isMenuOpen" @click="toggleMenu"></div>
		</transition>

		<transition>
			<div class="Menu-inner" v-show="isMenuOpen" ref="menuInner">

				<span class="Menu-close Subhead" @click="toggleMenu">Close</span>

				<nav>
					<ul class="Menu-nav">
						<li><nuxt-link tag="a" :to="{ name: 'index' }" class="h2 Menu-link">Home</nuxt-link></li>
						<li><nuxt-link tag="a" :to="{ name: 'team' }" class="h2 Menu-link">We are Leko</nuxt-link></li>
						<li><nuxt-link tag="a" :to="{ name: 'careers' }" class="h2 Menu-link">Careers</nuxt-link></li>
						<li><nuxt-link tag="a" :to="{ name: 'contact' }" class="h2 Menu-link">Contact us</nuxt-link></li>
					</ul>
				</nav>

				<div class="Menu-footer">
					<span class="h2 u-mb-30 u-mb-20--lg">Newsletter</span>
					<subscribe-form />
				</div>

			</div>
		</transition>

	</div>

</template>

<script>

	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

	export default {

		data () {
			return {
				isMenuOpen: false
			}
		},

		watch:{
			$route (to, from){
				this.isMenuOpen = false
			}
		},

		methods: {
			toggleMenu () {
				this.isMenuOpen = !this.isMenuOpen;
				(this.isMenuOpen) ? disableBodyScroll(this.$refs.menuInner) : enableBodyScroll(this.$refs.menuInner)
			}
		}
	}

</script>
