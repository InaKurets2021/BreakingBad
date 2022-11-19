<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
      <router-link class="go-home" to="/">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1L2 9M2 9L10 17M2 9H18"
            stroke="#FFD930"
            stroke-width="2"
          />
        </svg>
        На главную
      </router-link>
    </div>
  </div>
</template>

<script>
</script>


<style lang="scss">
#notfound {
  position: relative;
  height: 100%;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notfound .notfound-404 {
  position: relative;
  height: 180px;
  margin-bottom: 20px;
  z-index: -1;
}

.notfound .notfound-404 h1 {
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

.notfound .notfound-404 h2 {
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
.notfound .go-home {
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
  }
}

@media (max-width: 767px) {
  .notfound .notfound-404 h2 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .notfound .notfound-404 h1 {
    font-size: 182px;
  }
}
</style>