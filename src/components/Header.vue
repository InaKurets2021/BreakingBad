<template>
  <header class="header">
    <div class="header__container container">
      <router-link to="/">
        <img src="../assets/img/logo.png" alt="logo" />
      </router-link>
      <router-link to="/catalog" class="header__button">
        <svg class="header__svg">
          <use xlink:href="../assets/img/sprite.svg#burger"></use>
        </svg>
        Каталог
      </router-link>
    </div>
  </header>
</template>

<style lang="scss">
.header__container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__button {
  display: flex;
  align-items: center;
  border: 1.4px solid #ffd930;
  border-radius: 4px;
  padding: 8px 16px;
  color: #2d2d2d;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ffd930;
  }
  &.router-link-active {
    background-color: #ffd930;
  }
  .header__svg {
    width: 24px;
    height: 24px;
    stroke: #2d2d2d;
  }
}
</style>