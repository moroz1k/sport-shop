<template>
  <div class="shop-list-product-reviews">
    <div class="shop-list-product-reviews-item" v-for="(_, key) in empty" :key="`slpri${key}`"></div>
    <div class="shop-list-product-reviews-count">
      нет отзывов
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews',

  data: () => ({
    empty: 5
  })
}
</script>

<style type="text/scss" lang="scss">
  .shop-list-product-reviews {
    margin-top: auto;
    padding-top: 20px;

    display: flex;
    align-items: center;

    &-item {
      width: 19px;
      height: 19px;

      background: transparent url($images + '/ico/star-empty.svg') no-repeat center/100%;

      & + & {
        margin-left: 8px;
      }
    }

    &-count {
      margin-left: 10px;

      font-size: 14px;
      line-height: 16px;
      color: rgba(68, 68, 68, 0.5);
    }
  }
</style>
