<template>
	<div class="persona">
		<div class="container">
			<Loader v-if="isLoading" />
			<div class="persona" v-if="person">
							<div class="person-photo">
					<img :src="person.img" alt="" />
				</div>
				<div class="person-info">
					<span class="person__status">{{ person.status }}</span>
					<div class="person__name">{{ person.name }}</div>
					<div class="person__birthday"> Дата рождения: {{ person.birthday }}</div>
          <div class="person__nickname">Ник-нейм: {{ person.nickname }}</div>
          <blockquote>Цитата</blockquote>
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
		this.getPersonaOne();
	},
	methods: {
		getPersonaOne() {
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
.persona {
	display: flex;
	gap: 103px;
}
.person-photo {
	max-width: 585px;
	max-height: 585px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}
}
.person-info {

}
.person__status {
	background: rgba(48, 255, 30, 0.2);
	letter-spacing: 0.06em;
	font-variant: small-caps;
	color: #51E245;
	padding: 8px 12px;
	}

.person__name {
	font-weight: 500;
font-size: 32px;
line-height: 40px;
		margin-top: 12px;
	}

.person__birthday {
	font-size: 12px;
	color: #2D2D2D;
	opacity: 0.4;
}
.person__nickname {
	}

</style>