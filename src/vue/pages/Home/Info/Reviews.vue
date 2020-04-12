<template>
  <div class="home-info-reviews">
    <h2>Отзывы</h2>

    <div class="home-info-reviews-block">
      <transition-group name="fade">
        <div class="home-info-reviews-block-item" v-for="item in reviews" :key="item.ID">
          <div class="home-info-reviews-block-item-name">
            {{item.NAME}}
          </div>
          <div class="home-info-reviews-block-item-item">{{item.PROPERTY_ITEM_ID_NAME}}</div>
          <div class="home-info-reviews-block-item-text">{{item.PROPERTY_TEXT_VALUE.TEXT}}</div>
        </div>
      </transition-group>

      <Indi
        v-if="!isLoad"
      />
    </div>
  </div>
</template>

<script>
import Indi from '../../../components/Indicator'

export default {
  name: 'Reviews',
  components: { Indi },
  props: {
    reviews: Array,
    isLoad: Boolean
  }
}
</script>

<style type="text/scss" lang="scss">
  .home-info-reviews {

    &-block {
      margin-top: 15px;
      padding: 20px;

      border: 1px solid #F1EFEF;
      border-radius: $border-radius;

      &-item {

        &-name {
          font-weight: bold;
          font-size: 14px;
          line-height: 19px;
        }

        &-item {
          font-size: 14px;
          line-height: 19px;

          color: $color-main;
        }

        &-text {
          margin-top: 8px;
          font-size: 14px;
          line-height: 19px;
        }

        & + & {
          margin-top: 20px;
        }
      }
    }
  }
</style>
