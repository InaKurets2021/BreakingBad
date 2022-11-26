<template>
  <div class="notfound">
    <div class="notfound__container">
      <div class="notfound__info">
        <h1 class="notfound__title">404</h1>
        <h2 class="notfound__subtitle">Page not found</h2>
      </div>
      <router-link class="notfound__link" to="/">
        <svg class="notfound__svg">
          <use xlink:href="../assets/img/sprite.svg#arrow" />
        </svg>
        На главную
      </router-link>
    </div>
  </div>
</template>

<script>
</script>
<style lang="scss">
.notfound {
  position: relative;
  height: 100%;
}
.notfound__container {
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.notfound__info {
  position: relative;
  height: 180px;
  margin-bottom: 20px;
  z-index: -1;
}
.notfound__title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 224px;
  font-weight: 900;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: -12px;
  color: #2d2d2d;
  text-transform: uppercase;
  text-shadow: -1px -1px 0px #ffd930, 1px 1px 0px #ffd930;
  letter-spacing: -20px;
}
.notfound__subtitle {
  position: absolute;
  left: 0;
  right: 0;
  top: 110px;
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 3px 0 #ffd930;
  letter-spacing: 13px;
  margin: 0;
}
.notfound__link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2d2d2d;
  transition: color 0.3s;
  &:hover {
    color: #ffd930;
    .notfound__svg {
      stroke: #ffd930;
    }
  }
}
.notfound__svg {
  width: 18px;
  height: 18px;
  stroke: #2d2d2d;
  transition: stroke 0.3s;
}
@media (max-width: 767px) {
  .notfound__subtitle {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .notfound__title {
    font-size: 182px;
  }
}
</style>