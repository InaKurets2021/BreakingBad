<template>
	<div class="persona">
		<div class="container">
			<Loader v-if="isLoading" />
			<div class="persona" v-if="person">
				<Loader v-if="isLoading" />
				<div class="person-photo">
					<img :src="person.img" alt="" />
				</div>
				<div class="person-info">
					<span class="person__status">{{ person.status }}</span>
					<div class="person__name">{{ person.name }}</div>
					<div class="person__birthday">{{ person.birthday }}</div>
          <div class="person__nickname">{{ person.nickname }}</div>
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
</style>