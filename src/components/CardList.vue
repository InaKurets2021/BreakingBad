<template>
  <div class="card-list" :class="{ active: grid === true }" v-if="persons">
    <div class="card-item" v-for="person in persons" :key="person.char_id">
      <Card
        :char_id="person.char_id"
        :name="person.name"
        :status="person.status"
        :birthday="person.birthday"
        :img="person.img"
        :grid="grid"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  components: {
    Card,
  },
  props: {
    persons: {
      type: Array,
    },
    grid: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 24px;
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
</style>