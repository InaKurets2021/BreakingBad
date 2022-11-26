<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li
        class="pagination__item"
        :class="{ active: page === currentPage }"
        v-for="page in pages"
        :key="page"
        @click="changePage(page)"
      >
        {{ page }}
      </li>
    </ul>
    <div class="pagination__btns">
      <button
        class="pagination__btn pagination__btn_prev"
        @click="$emit('onPrevPage')"
      >
        <svg width="24" height="24" :class="{ disabled: currentPage === 1 }">
          <use xlink:href="../assets/img/sprite.svg#arrow"></use>
        </svg>
      </button>
      <button
        class="pagination__btn pagination__btn_next"
        @click="$emit('onNextPage')"
      >
        <svg
          :class="{ disabled: currentPage === pages.length }"
          width="24"
          height="24"
        >
          <use xlink:href="../assets/img/sprite.svg#arrow"></use>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    pages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      this.$emit("onChangePage", page);
    },
  },
};
</script>
<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 480px) {
    gap: 10px;
  }
}
.pagination__list {
  display: flex;
  align-items: center;
  gap: 10px;
}
.pagination__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 26px;
    height: 26px;
  }
  &.active {
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #ffd930;
  }
}
.pagination__btns {
  display: flex;
  gap: 24px;
  @media (max-width: 480px) {
    gap: 10px;
  }
}
.pagination__btn {
  width: 18px;
  height: 18px;
  background: none;
  &_next {
    transform: rotate(180deg);
  }
  svg {
    display: block;
    stroke: #ffd930;
    &.disabled {
      stroke: #cac7c7;
      cursor: no-drop;
    }
  }
}
</style>