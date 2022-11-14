<template>
  <div class="page">
    <header class="header">
      <div class="header__container container">
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
      <div class="footer__container container">
        <h2 class="year">{{ new Date(). getFullYear()}}</h2>
        <h2 class="year">@Ina Kurets</h2>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.header__container,
.footer__container {
  height: 100%;
  display: flex;
   align-items: center;
  justify-content: space-between;
}

.header__button {
  border: 1.4px solid #FFD930;
  border-radius: 4px;
  padding: 8px 16px;
color: #2D2D2D;
transition: background-color .3s ;
&:hover{
background-color: #FFD930;
}
&.router-link-active {
  background-color: #FFD930;
}
}
.main {
  width: 100%;
  background-color: #fbfbfb;;
}
</style>
