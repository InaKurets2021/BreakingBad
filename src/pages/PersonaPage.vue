<template>
	<div class="personpage">
		<div class="container">
			<router-link class="person__link" to="/catalog">
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 1L2 9M2 9L10 17M2 9H18" stroke="#FFD930" stroke-width="2" />
				</svg>
				Назад в Каталог
			</router-link>
			<Loader v-if="isLoading" />
			<div class="person" v-if="person">
				<div class="person__photo">
					<img :src="person.img" alt="" />
				</div>
				<div class="person__info">
					<span class="person__info-status">{{ person.status }}</span>
					<div class="person__info-name">{{ person.name }}</div>
					<div class="person__info-birthday"> <span>Дата рождения:</span> {{ person.birthday }}</div>
					<div class="person__info-nickname"> <span>Ник-нейм:</span> {{ person.nickname }}</div>
					<blockquote person__info-quote><span>Цитата</span>Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Non, aliquam laoreet vivamus sed. Diam fames mi,
						quam tellus cursus volutpat velit massa.</blockquote>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Loader from "../components/Loader.vue"
export default {
	components: {
		Loader,
	},
	data() {
		return {
			person: null,
			isLoading: false,
		};
	},
	mounted() {
		this.getPersonOne();
	},
	methods: {
		getPersonOne() {
			this.isLoading = true;
			const id = this.$route.params.id;
			fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
				.then((res) => res.json())
				.then((persona) => {
					this.person = persona[0];
					this.isLoading = false;
				});
		},
	},
};
</script>

<style lang="scss">
.personpage {
	padding-top: 40px;
	padding-bottom: 40px;
}

.person__link {
	margin-bottom: 48px;
	display: flex;
	gap: 12px;
	align-items: center;

	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #2d2d2d;
	transition: color 0.3s;

	&:hover {
		color: #ffd930;
	}
}

.person {
	display: flex;
	flex-wrap: wrap;
	gap: 103px;

	@media (max-width: 1100px) {
		justify-content: center;
	}
}

.person__photo {
	max-width: 585px;
	width: 100%;
	max-height: 585px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}
}

.person__info {
	max-width: 410px;

	@media (max-width: 1100px) {
		text-align: center;
	}
}

.person__info-status {
	display: inline-block;
	background: rgba(48, 255, 30, 0.2);
	letter-spacing: 0.06em;
	font-variant: small-caps;
	color: #51E245;
	padding: 8px 12px;
	margin-bottom: 32px;
}

.person__info-name {
	font-weight: 500;
	font-size: 32px;
	line-height: 40px;
	margin-bottom: 16px;
}

.person__info-birthday {
	margin-bottom: 16px;
  span {
    color: #a9a9a9;
  }
}

.person__info-nickname {
	margin-bottom: 32px;
  span {
    color: #a9a9a9;
  }
}
.person__info-quote {
  span {
    color: #a9a9a9;
  }
}
</style>