<template>
  <form class="search" @submit.prevent="searchPersons">
    <input
      class="search__input"
      type="text"
      placeholder="Поиск"
      v-model="searchValue"
    />
    <button class="search__button">
      <svg class="search__svg" width="24" height="24">
        <use xlink:href="../assets/img/sprite.svg#search"></use>
      </svg>
      Найти
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    searchPersons() {
      this.$emit("onSearchPersons", this.searchValue);
      this.searchValue = "";
    },
  },
};
</script>
<style lang="scss">
.search {
  display: flex;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  max-width: 790px;
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
  fill: #ffd930;
  transition: fill 0.3s ease-in-out;
}
.search__button {
  padding: 16px 24px;
  display: flex;
  background: none;
  align-items: center;
  border-radius: 4px;
  transition: color 0.3s, background 0.3s ease-in-out;
  &:hover {
    background: #ffd930;
    color: #ffffff;
    .search__svg {
      fill: #ffffff;
    }
  }
}
.search__button:hover .search__svg path {
  stroke: red;
}
</style>