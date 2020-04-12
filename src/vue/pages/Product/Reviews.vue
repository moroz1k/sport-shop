<template>
  <div class="product-reviews">
    <Indi
      v-if="!isLoad"
    />

    <div
      class="product-reviews-item"
      v-for="item in list"
      :key="item.ID"
    >
      <div class="product-reviews-item-name">
        {{item.NAME}} &nbsp;&nbsp;
        <Stars
          :full="item.PROPERTY_RATING_VALUE || 0"
        />
      </div>
      <div class="product-reviews-item-item">{{item.PROPERTY_ITEM_ID_NAME}}</div>
      <div class="product-reviews-item-text">{{item.PROPERTY_TEXT_VALUE.TEXT}}</div>
    </div>

  </div>
</template>

<script>
import Indi from '../../components/Indicator'
import API from '../../../js/api'
import Stars from '../../components/Stars'

export default {
  name: 'Reviews',

  components: { Stars, Indi },

  props: {
    item: Object
  },

  data: () => ({
    isLoad: false,
    list: []
  }),

  mounted () {
    API.fetchItemReviews({ id: this.item.ID })
      .then(this.setList)
      .then(() => this.setLoad())
  },
  methods: {
    setList ({ list }) {
      this.list = list
    },
    setLoad () {
      this.isLoad = true
    }
  }
}
</script>

<style lang="scss">
  .product-reviews {

    &-item {

      &-name {
        display: flex;
        align-items: center;

        font-weight: bold;
        font-size: 16px;
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
</style>
