<template>
  <div class="page">
    <header class="header">
      <div class="header__container">
        <router-link to="/">
          <img src="../src/assets/img/logo.png" alt="logo">
        </router-link>
        <router-link to="/catalog" class="header__button">
          <img src="../src/assets/img/burger.svg">
          Каталог
        </router-link>
      </div>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <div class="footer__container">
        <h2 class="year">2022</h2>
        <h2 class="year">@author</h2>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.header__container,
.footer__container {
  height: 100%;
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}

.header__button {
  border: 1.4px solid #FFD930;
  border-radius: 4px;
  padding: 8px 16px;
}
</style>
