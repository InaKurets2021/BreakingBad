<template>
  <div class="card-list" :class="{ active: grid === true }" v-if="persons">
    <div
      class="card-item"
      v-for="person in persons"
      :key="person.char_id"
    ></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
</style>