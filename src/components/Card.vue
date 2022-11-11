<template>
	<div class="card">
		<div class="card__img">
			<img :src="img" alt="" />
		</div>
		<div class="card__description">
			<span class="card__status">{{ status }}</span>
			<div class="card__name">{{ name }}</div>
			<div class="card__birthday">{{ birthday }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		status: {
			type: String
		},
		name: {
			type: String
		},
		birthday: {
			type: String
		},
		img: {
			type: String
		},
	}
}

</script>

<style lang="scss">
.card {
	max-width: 379px;
	max-height: 124px;
	width: 100%;
	display: flex;
	background: #FFFFFF;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	@media (max-width: 576px) {
    max-width: 100%;
  }
}

.card__img {
	width: 124px;
	height: 124px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}

}
.card__description{
	margin: 16px 20px;
}
.card__status {
	background: rgba(48, 255, 30, 0.2);
	letter-spacing: 0.06em;
	font-variant: small-caps;
	color: #51E245;
	padding: 8px 12px;
	}

.card__name {
	color: #2D2D2D;
	margin-top: 12px;
}

.card__birthday {
	font-size: 12px;
	color: #2D2D2D;
	opacity: 0.4;
}
</style>