<template>
  <div class="product">
    <Indi v-if="!isLoad" />
    <div v-else class="product-wrap">
      <Bread
        :list="getBread"
      />

      <div class="product-title container">
        <h1>{{item.PROPERTY_BRAND_NAME}} {{item.NAME}}</h1>
        <div class="product-title-reviews"></div>
      </div>

      <div class="product-main container">
        <Slider
          :images="item.PICTURES"
        />
        <Info
          :item="item"
        />
      </div>

      <Tabs
        :item="item"
      />

      <HorizontalItems
        title="С этим товаром покупают"
        :items="item.SIMILIAR || []"
        :isLoad="isLoad"
      />
    </div>
  </div>
</template>

<script>
import Bread from '../components/TheBread'
import Slider from './Product/Slider'
import Info from './Product/Info'
import Tabs from './Product/Tabs'
import Indi from '../components/Indicator'

import { mapGetters, mapActions } from 'vuex'
import HorizontalItems from '../components/HorizontalItems'

export default {
  name: 'Product',

  mounted () {
    scrollTo({
      top: 0
    })
    this.fetchItem()
  },

  components: {
    HorizontalItems,
    Slider,
    Info,
    Tabs,
    Indi,
    Bread
  },

  computed: {
    ...mapGetters({
      item: 'product/item',
      isLoad: 'product/isLoad',
      isLoading: 'product/isLoading'
    }),
    getBread () {
      return [
        {
          title: 'Такой то каталог',
          to: '/shop'
        }
      ]
    }
  },

  methods: {
    ...mapActions({
      fetchItem: 'product/fetchItem'
    })
  }
}
</script>

<style lang="scss">
  .product {
    padding-bottom: 60px;

    &-wrap {

    }

    &-title {
      margin-top: 45px;

      &-reviews {

      }
    }

    &-main {
      margin-top: 50px;

      display: flex;
      justify-content: stretch;
      align-items: flex-start;
    }
  }
</style>
