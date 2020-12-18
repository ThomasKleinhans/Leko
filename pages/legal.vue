<template>
	<div class="Legal" ref="wrapper">
		<main role="main" class="Legal-inner">
			<div class="Legal-text TextAnimation">
				<h1 class="h2 u-mb-30">Legal</h1>
				<div class="Legal-row">
					<p class="Paragraph">
						Leko Labs SA<br />
						Technoport - Bâtiment 1<br />
						Rue de l’Industrie<br />
						L-3895 Foetz<br />
					</p>
					<p class="Paragraph">
						<strong>RCS Luxembourg:</strong><br />
						B212767
					</p>
					<p class="Paragraph">
						<strong>Administrateur unique:</strong><br />
						François-Xavier Cordier
					</p>
				</div>
			</div>
		</main>
		<global-footer />
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
