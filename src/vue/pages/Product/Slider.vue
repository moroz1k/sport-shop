<template>
  <div class="product-slider">
    <div class="product-slider-left">
      <div class="swiper-button-prev"
        @click="$refs.productslider.swiper.slidePrev()">
      </div>
      <div class="swiper-button-next"
           @click="$refs.productslider.swiper.slideNext()">
      </div>
      <swiper :options="swiperOption" ref="productslider">
        <swiper-slide
          v-for="(image, key) in images"
          :key="`psls${key}`"
          @click.native="setCurrent(key)"
        >
          <div
            class="product-slider-item"
            :class="{active: key === current}"
            :style="{backgroundImage: `url('http://remsport.ru/${image}')`}"
          >
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="product-slider-image">
      <img :src="'http://remsport.ru' + images[current]">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',

  props: {
    images: Array
  },

  data: () => ({
    current: 0,

    swiperOption: {
      direction: 'vertical',
      spaceBetween: 20,
      slidesPerView: 3
    }
  }),

  methods: {
    setCurrent (key) {
      this.current = key
    }
  }
}
</script>

<style lang="scss">
  .product-slider {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;

    &-item {
      width: 118px;
      height: 118px;
      max-width: 120px;
      max-height: 120px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid #F1EFEF;
      border-radius: 3px;

      cursor: pointer;

      transition: 0.2s ease-out;

      background: transparent no-repeat center/contain;

      &:hover {
        border-color: rgba(#F48221, 0.7);
      }

      &.active {
        border-color: #F48221;
      }
    }

    &-left {
      min-width: 120px;
      height: 100%;
      display: flex;
      align-items: center;

      position: relative;

      .swiper-button-prev {
        width: 25px;
        height: 16px;

        top: -20px;
        left: calc(50% - 13.5px);
        right: auto;

        background-image: url("data:image/svg+xml,%3Csvg width='25' height='16' viewBox='0 0 25 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.4127 15.6376L12.1376 6.36245L2.86244 15.6376L0 12.7751L12.1376 0.637571L24.2751 12.7751L21.4127 15.6376Z' fill='%23CCCCCC'/%3E%3C/svg%3E%0A");
        background-size: contain;
      }
      .swiper-button-next {
        width: 25px;
        height: 16px;

        left: calc(50% - 13.5px);
        right: auto;
        top: auto;
        bottom: -40px;

        background-image: url("data:image/svg+xml,%3Csvg width='25' height='15' viewBox='0 0 25 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.58731 -0.00012207L12.8624 9.275L22.1376 -0.00012207L25 2.86232L12.8624 14.9999L0.724869 2.86232L3.58731 -0.00012207Z' fill='%23CCCCCC'/%3E%3C/svg%3E%0A");
        background-size: contain;
      }

      .swiper-container {
        height: 400px;
      }

      .swiper-slide {

      }
    }
    &-image {
      width: 100%;
      height: 475px;
      margin-left: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 320px;
        max-height: 100%;
      }
    }
  }
</style>
