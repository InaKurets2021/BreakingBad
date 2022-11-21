<template>
	<footer class="footer">
		<div class="footer__container container">
			<h2 class="year">{{ new Date().getFullYear() }}</h2>
			<h2 class="year">@Ina Kurets</h2>
		</div>
	</footer>
</template>

<style lang="scss">
.footer__container {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>