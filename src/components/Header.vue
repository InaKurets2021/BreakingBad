<template>
	<header class="header">
		<div class="header__container container">
			<router-link to="/">
				<img src="../assets/img/logo.png" alt="logo">
			</router-link>
			<router-link to="/catalog" class="header__button">
				<img src="../assets/img/burger.svg">
				Каталог
			</router-link>
		</div>
	</header>

</template>

<style lang="scss">
.header__container {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.header__button {
	border: 1.4px solid #FFD930;
	border-radius: 4px;
	padding: 8px 16px;
	color: #2D2D2D;
	transition: background-color .3s;

	&:hover {
		background-color: #FFD930;
	}

	&.router-link-active {
		background-color: #FFD930;
	}
}
</style>