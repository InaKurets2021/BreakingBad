<template>
  <div class="card-display">
    <p class="card-display__text">Отобразить карточек:</p>
    <ul class="card-display__list">
      <li
        class="card-display__item"
        :class="{ active: limit == num }"
        v-for="num in showCard"
        :key="num"
        @click="$emit('changeDisplayCard', num)"
      >
        {{ num }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    showCard: {
      type: Array,
      required: true,
    },
    limit: {
      type: Number,
      default: 10,
    },
  },
};
</script>

<style lang="scss">
.card-display {
  display: flex;
  gap: 24px;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
}
.card-display__list {
  display: flex;
  gap: 10px;
  align-items: center;
}
.card-display__item {
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
</style>