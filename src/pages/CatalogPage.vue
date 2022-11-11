<template>
  <div class="catalog">
    <div class="container">
      <form class="search" @submit.prevent="searchPerson">
        <input type="text" class="search__input" placeholder="Поиск" v-model="searchValue">
        <button class="search__button">
          <svg class="search__svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M17 11.5C17 14.5376 14.5376 17 11.5 17C8.46243 17 6 14.5376 6 11.5C6 8.46243 8.46243 6 11.5 6C14.5376 6 17 8.46243 17 11.5ZM19 11.5C19 15.6421 15.6421 19 11.5 19C7.35786 19 4 15.6421 4 11.5C4 7.35786 7.35786 4 11.5 4C15.6421 4 19 7.35786 19 11.5ZM16.2929 17.7071L20.2929 21.7071L21.7071 20.2929L17.7071 16.2929L16.2929 17.7071Z"
              fill="#FFD930" />
          </svg> Найти
        </button>
      </form>
      <h1 class="catalog__title">Каталог</h1>
      <Loader v-if="isLoading" />

      <div class="card-list" v-if="cards">
               <div class="card-item" v-for="card in cards" :key="card.char_id">
          <router-link :to="`persona/${card.char_id}`">
            <Card :name="card.name" :status="card.status" :birthday="card.birthday" :img="card.img" />
          </router-link>
        </div>
      </div>
      <div class="card-list" v-if="personSearch">
        <div class="card-item" v-for="card in personSearch" :key="card.char_id">
          <router-link :to="`persona/${card.char_id}`">
            <Card
              :name="card.name"
              :status="card.status"
              :birthday="card.birthday"
              :img="card.img"
            />
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
      searchValue: "",
      personSearch: null,
 
    };
  },
  mounted() {
    this.getPersonsAll();
  },

  methods: {
    getPersonsAll() {
      this.isLoading = true;
      fetch("https://www.breakingbadapi.com/api/characters?limit=8")
        .then((res) => res.json())
        .then((catalog) => {
          this.cards = catalog;
          this.isLoading = false;
        });
    },
    searchPerson() {
      this.cards = null; 
      this.isLoading = true;
      fetch(`https://www.breakingbadapi.com/api/characters?name=${this.searchValue}`)
        .then((res) => res.json())
        .then((persons) => {
          this.personSearch = persons;
          this.isLoading = false;
        });
    },

  },
};
</script>

<style lang="scss">
.catalog {
  padding-top: 80px;
  padding-bottom: 80px;
}
.search {
  display: flex;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  max-width: 790px;
  width: 100%;
  height: 56px;
  margin: 0 auto;
  margin-bottom: 80px;
  padding-left: 24px;
  justify-content: space-between;
}

.search__input {
  width: 100%;
}
.search__input::placeholder {
  opacity: 0.4;
}
.search__svg {
  margin-right: 13px;
}

.search__button {
  padding: 16px 24px;
  display: flex;
  background: none;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s;
  &:hover {
    background-color: #FFD930;
    color: #FFFFFF;

    path {
      fill: #FFFFFF;
    }
  }
}
.card-list {
   display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 24px;
  min-height: 270px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
  }
  .catalog__pages {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

</style>