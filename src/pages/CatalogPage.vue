<template>
  <div class="catalog">
    <div class="container">
      <div class="card-list">
        <Loader v-if="isLoading" />
        <div class="card-item" v-for="card in cards" :key="card.id">
          <router-link :to="`persona/${card.id}`">
            <Card :name="card.name" :status="card.status" :birthday="card.birthday" :img="card.img" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Loader from "../components/Loader.vue"
export default {
  components: {
    Card,
    Loader,
  },
  data() {
    return {
      cards: null,
      isLoading: false,
    };
  },
  mounted() {
    this.getPersonaAll();
  },

  methods: {
    getPersonaAll() {
      this.isLoading = true;
      fetch("https://www.breakingbadapi.com/api/characters?limit=8")
        .then((res) => res.json())
        .then((catalog) => (this.cards = catalog));
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss">
.card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>