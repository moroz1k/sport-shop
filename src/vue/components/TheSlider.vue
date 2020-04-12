<template>
  <div class="slider">
    <div class="slider-wrap container">
      <swiper :options="swiperOption" ref="slider">
        <swiper-slide v-for="(slide, key) in slides" :key="`ss${key}`">
          <a :href="slide.link">
            <img :src="`http://remsport.ru${slide.image}`" :alt="slide.name">
          </a>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev" @click="$refs.slider.swiper.slidePrev()"></div>
        <div class="swiper-button-next" slot="button-next" @click="$refs.slider.swiper.slideNext()"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Slider',

  data: () => ({
    swiperOption: {
      observer: true,
      loop: true
    }
  }),

  computed: {
    ...mapGetters({
      slides: 'common/slides'
    })
  }
}
</script>

<style type="text/scss" lang="scss">
  .slider {
    background-color: #E5E5E5;

    &-wrap {
      padding: 0;
    }

    .swiper-button-prev {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23FFFFFF'%2F%3E%3C%2Fsvg%3E");
      background-size: contain;
    }

    .swiper-button-next {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23FFFFFF'%2F%3E%3C%2Fsvg%3E");
      background-size: contain;
    }

    .swiper-slide {
      height: 285px;

      text-align: center;

      img {
        height: 100%;
      }
    }
  }
</style>
