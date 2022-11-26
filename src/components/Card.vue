<template>
  <router-link
    :to="`person/${char_id}`"
    class="card"
    :class="{ active: grid === true }"
  >
    <div class="card__img">
      <img :src="img" :alt="name" />
    </div>
    <div class="card__description">
      <span class="card__status">{{ status }}</span>
      <div class="card__name">{{ name }}</div>
      <div class="card__birthday">{{ birthday }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    char_id: {
      type: Number,
    },
    status: {
      type: String,
    },
    name: {
      type: String,
    },
    birthday: {
      type: String,
    },
    img: {
      type: String,
    },
    grid: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.card {
  max-width: 379px;
  max-height: 124px;
  width: 100%;
  display: flex;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 576px) {
    max-width: 100%;
  }

  &.active {
    max-width: 100%;
    padding: 8px 0;
    border-top: 1px solid #a9a9a9;
    &:hover {
      transform: scale(1);
    }
    .card__img {
      margin-right: 40px;
      max-width: 64px;
      height: 64px;
      @media (max-width: 600px) {
        margin-right: 20px;
      }
    }

    .card__description {
      margin: 0;
      display: grid;
      grid-template-columns: minmax(50px, 130px) minmax(50px, 200px) minmax(
          50px,
          200px
        );
      align-items: center;
      gap: 140px;
      @media (max-width: 800px) {
        gap: 50px;
        font-size: 14px;
      }
      @media (max-width: 480px) {
        gap: 20px;
      }
    }
    .card__status {
      text-align: center;
      @media (max-width: 480px) {
        font-size: 12px;
      }
    }
    .card__name {
      margin-top: 0;
    }
  }
}

.card__img {
  width: 124px;
  height: 124px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
}

.card__description {
  margin: 16px 20px;
}

.card__status {
  background: rgba(48, 255, 30, 0.2);
  letter-spacing: 0.06em;
  line-height: 1;
  font-variant: small-caps;
  color: #51e245;
  padding: 8px 12px;
}

.card__name {
  color: #2d2d2d;
  margin-top: 12px;
}

.card__birthday {
  font-size: 12px;
  color: #2d2d2d;
  opacity: 0.4;
}
</style>