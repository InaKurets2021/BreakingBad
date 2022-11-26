<template>
  <div class="catalog">
    <div class="container">
      <Loader v-if="isLoading" />

      <Search @onSearchPersons="searchPersons" />

      <div class="catalog__top">
        <h1 class="catalog__title">Каталог</h1>
        <div class="catalog__icons" v-if="!searchEmpty">
          <svg
            class="catalog__svg"
            :class="{ active: grid === true }"
            @click="grid = true"
          >
            <use xlink:href="../assets/img/sprite.svg#grid"></use>
          </svg>
          <svg
            class="catalog__svg"
            :class="{ active: grid === false }"
            @click="grid = false"
          >
            <use xlink:href="../assets/img/sprite.svg#column" />
          </svg>
        </div>
      </div>

      
      <div class="catalog__content" :class="{ 'no-result': searchEmpty }">
        <CardList :persons="persons" :grid="grid" />

        <div class="catalog__no-result" v-if="searchEmpty === true">
          По Вашему запросу ничего не найдено
        </div>
        <button
          class="catalog__back"
          v-if="showBtnBackCatalog === true"
          @click="getPersonsAll"
        >
          <svg class="person__svg">
            <use xlink:href="../assets/img/sprite.svg#arrow"></use>
          </svg>
          Назад в каталог
        </button>
      </div>

      <div class="catalog__footer" v-if="showCatalogFooter === true">
        <Pagination
          :count="count"
          :limit="limit"
          :currentPage="currentPage"
          :pages="pages"
          @onChangePage="changePages"
          @onPrevPage="prevPage"
          @onNextPage="nextPage"
        />

        <CardDisplay
          :showCard="showCard"
          :limit="limit"
          @changeDisplayCard="showCardCount"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CardList from "@/components/CardList";
import Card from "@/components/Card";
import CardDisplay from "@/components/CardDispaly";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import Search from "@/components/Search";
export default {
  components: {
    CardList,
    Card,
    CardDisplay,
    Pagination,
    Loader,
    Search,
  },
  data() {
    return {
      persons: null,
      isLoading: false,
      showCard: [10, 15, 20, 25, 30],
      limit: 10,
      grid: false,
      count: 62,
      currentPage: 1,
      searchEmpty: false,
      showBtnBackCatalog: false,
      showCatalogFooter: false,
    };
  },
  computed: {
    pages() {
      const pages = Math.ceil(this.count / this.limit);
      const arr = [];
      for (let i = 1; i <= pages; i++) {
        arr.push(i);
      }
      return arr;
    },
    offset() {
      return this.currentPage * this.limit - this.limit;
    },
  },
  // created() {
  //   if (this.$route.query.page) {
  //     this.changePages(Number(this.$route.query.page));
  //   }
  // },
  mounted() {
    this.getPersonsAll();
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
    getPersonsAll() {
      this.persons = null;
      this.isLoading = true;
      this.showBtnBackCatalog = false;
      this.searchEmpty = false;
      fetch(
        `https://www.breakingbadapi.com/api/characters?limit=${this.limit}&offset=${this.offset}`
      )
        .then((res) => res.json())
        .then((persons) => {
          this.persons = persons;
          this.isLoading = false;
          this.showCatalogFooter = true;
        });
    },
    searchPersons(searchValue) {
      if (searchValue === "") {
        return;
      }
      this.searchEmpty = false;
      this.showBtnBackCatalog = false;
      this.showCatalogFooter = false;
      this.persons = null;
      this.isLoading = true;
      fetch(`https://www.breakingbadapi.com/api/characters?name=${searchValue}`)
        .then((res) => res.json())

        .then((persons) => {
          if (persons.length === 0) {
            this.searchEmpty = true;
          }
          this.showBtnBackCatalog = true;
          this.persons = persons;
          this.isLoading = false;
        });
    },
    showCardCount(num) {
      this.limit = num;

      const newCurrentPage = Math.ceil(this.count / num);

      if (newCurrentPage <= this.currentPage) {
        this.currentPage = newCurrentPage;
      }
    },
    changePages(page) {
      this.currentPage = page;
      // this.$router.push({ query: { page } });
    },
    prevPage() {
      if (this.currentPage <= 1) return;
      this.currentPage--;
    },
    nextPage() {
      if (this.currentPage >= this.pages.length) return;
      this.currentPage++;
    },
  },
};
</script>

<style lang="scss">
.catalog {
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 40px;
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
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: #2d2d2d;
  &.active {
    stroke: #ffd930;
  }
}
.cards-titles {
  display: flex;
}
.catalog__content {
  margin-bottom: 48px;
  min-height: 570px;
  &.no-result {
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .card-list {
      display: none;
    }
  }
}
.catalog__no-result {
  font-size: 30px;
}
.catalog__back {
  margin-top: 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: none;
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
.catalog__footer {
  display: flex;
  justify-content: space-between;
  @media (max-width: 820px) {
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
}
</style>