<template>
<div class="card">
	<div class="card__img">
		<img :src="img" alt="" />
	</div>
	<div class="card__description">
		<div class="card__status">{{status}}</div>
		<div class="card__name">{{name}}</div>
		<div class="card__birthday">{{birthday}}</div>
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
display: flex;
background: #FFFFFF;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 4px;
}
.card__img {
	width: 174px;
height: 174px; 
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
    object-position: top;
}

}
.card__descriprion {

}
.card__status{
font-weight: 400;
font-size: 12px;
line-height: 16px;
background: rgba(48, 255, 30, 0.2);
letter-spacing: 0.06em;
font-variant: small-caps;
color: #51E245;
}
.card__name{
	font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #2D2D2D;
}
.card__birthday{
font-weight: 400;
font-size: 12px;
line-height: 24px;
color: #2D2D2D;
opacity: 0.4;
}
</style>