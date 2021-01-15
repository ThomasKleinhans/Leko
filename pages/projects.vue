<template>
	<div class="Projects" ref="wrapper">
		<main role="main">
            <div>
                
            </div>
		</main>
	</div>
</template>

<script>
export default {

	mounted () {
		setTimeout(() => {
			this.$refs.wrapper.classList.add('active')
		})
	}

}
</script>
