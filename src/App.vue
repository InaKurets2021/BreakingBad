<template>
  <div class="page">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import  Header  from "./components/Header.vue";
import  Footer  from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>


<style lang="scss">
.main {
  width: 100%;
  background-color: #fbfbfb;
  ;
}
</style>
