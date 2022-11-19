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
      <div class="catalog__top">
        <h1 class="catalog__title">Каталог</h1>
        <div class="catalog__icons">
          <svg class="catalog__svg" :class="{ active: grid == true }" @click="grid = true" width="24" height="24"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="9" rx="1" stroke="#2D2D2D" stroke-width="1" />
            <rect x="1" y="14" width="22" height="9" rx="1" stroke="#2D2D2D" stroke-width="1" />
          </svg>
          <svg class="catalog__svg" :class="{ active: grid == false }" @click="grid = false" width="24" height="24"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="9" height="9" rx="1" stroke="#2D2D2D" stroke-width="1" />
            <rect x="1" y="14" width="9" height="9" rx="1" stroke="#2D2D2D" stroke-width="1" />
            <rect x="14" y="1" width="9" height="9" rx="1" stroke="#2D2D2D" stroke-width="1" />
            <rect x="14" y="14" width="9" height="9" rx="1" stroke="#2D2D2D" stroke-width="1" />
          </svg>
        </div>
      </div>

      <Loader v-if="isLoading" />
      <div class="cards-titles " v-if="grid == true">
        <div class="cards-titles__status">Статус</div>
        <div class="cards-titles__name">Имя</div>
        <div class="cards-titles__birthday">Дата рождения</div>
      </div>
      <div class="card-list" :class="{ active: grid == true }" v-if="cards">
        <div class="card-item" v-for="card in cards" :key="card.char_id">
          <router-link :to="`persona/${card.char_id}`">
            <Card :name="card.name" :status="card.status" :birthday="card.birthday" :img="card.img" :grid="grid" />
          </router-link>
        </div>
      </div>
      <div class="card-list" v-if="personSearch">
        <div class="card-item" v-for="card in personSearch" :key="card.char_id">
          <router-link :to="`persona/${card.char_id}`">
            <Card :name="card.name" :status="card.status" :birthday="card.birthday" :img="card.img" />
          </router-link>
        </div>
      </div>

      <div class="catalog__footer">
        <ul class="pagination">
          <li class="pagination__item" :class="{ active: page == currentPage }" v-for="page in pages" :key="page"
            @click="paginationCharacters(page)">
            {{ page }}</li>
        </ul>
        <ul class="show-card">
          <p class="show-card__text">Отобразить карточек:</p>
          <li class="show-card__item " :class="{ active: limit == item }" v-for="item in showCard" :key="item"
            @click="showCardCount(item)"> {{ item }}</li>
        </ul>
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
      showCard: [5, 10, 15, 20],
      limit: 5,
      grid: false,
      count: 62,
      limit: 10,
      currentPage: 1,
    };
  },
  computed: {
    pages() {
      const pages = Math.ceil(this.count / this.limit)
      const arr = [];
      for (let i = 1; i <= pages; i++) {
        arr.push(i)
      }
      return arr;
    },
    offset() {
      return this.currentPage * this.limit - this.limit;
    },
  },
  mounted() {
    this.getPersonsAll();
    this.getPersons();
  },
  watch: {
    limit() {
      this.getPersonsAll();
    },
    currentPage() {
      this.getPersonsAll();
    },
  },
  methods: {
    getPersons() {
      fetch(`https://www.breakingbadapi.com/api/characters`)
        .then((res) => res.json())
        .then((data) => {
          this.count = data.length;
        });
    },

    getPersonsAll() {
      this.cards = null;
      this.isLoading = true;
      fetch(`https://www.breakingbadapi.com/api/characters?limit=${this.limit}&offset=${this.offset}`)
        .then((res) => res.json())
        .then((catalog) => {
          this.cards = catalog;
          this.isLoading = false;
        });
    },
    searchPerson() {
      if (this.searchValue == "") {
        return;
      }
      this.cards = null;
      this.isLoading = true;
      fetch(`https://www.breakingbadapi.com/api/characters?name=${this.searchValue}`)
        .then((res) => res.json())
        .then((persons) => {
          this.personSearch = persons;
          this.isLoading = false;
        });
      this.searchValue = "";
    },
    showCardCount(item) {
      this.limit = item;
    },
    paginationCharacters(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
}
.pagination__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &.active {
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #ffd930;
  }
}
.cars-titles {
  display: flex;
}

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

.catalog__top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
}

.catalog__title {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
}

.catalog__icons {
  display: flex;
  gap: 16px;
  align-items: center;
}

.catalog__svg {
  cursor: pointer;

  &.active {
    rect {
      stroke: #FFD930;
    }
  }
}

.cards-titles {
  display: flex;

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

  &.active {
    grid-template-columns: 1fr;
    gap: 0;

    .card-item:last-child {
      border-bottom: 1px solid #a9a9a9;
    }
  }
}

.catalog__footer {
  display: flex;
  justify-content: space-between;
}

.show-card {
  display: flex;
  gap: 25px;
  align-items: center;
}

.show-card__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &.active {
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #ffd930;
  }
}
</style>