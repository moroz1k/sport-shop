<template>
  <div class="shop-list-product">
    <router-link :to="`/shop/${item.CODE}.html`" class="shop-list-product-wrap">
      <div class="shop-list-product-image" :style="{backgroundImage: `url('http://remsport.ru${item.DETAIL_PICTURE}')`}">
        <div class="shop-list-product-image-btn">Просмотр</div>
      </div>
      <div class="shop-list-product-name">
        {{item.NAME}}
      </div>
      <div class="shop-list-product-category" v-show="!!item.SECTION">
        {{item.SECTION}}
      </div>
      <Reviews/>
      <div class="shop-list-product-available" :class="{available: item.CATALOG_AVAILABLE === 'Y' && item.CATALOG_QUANTITY !== '0'}">
        {{item.CATALOG_AVAILABLE === 'Y' && item.CATALOG_QUANTITY !== '0' ? 'В наличии' : 'Нет в наличии'}}
      </div>
      <div class="shop-list-product-prices" v-show="!!formatPrice">
        {{formatPrice}}
      </div>
      <div class="shop-list-product-btns">
        <div class="shop-list-product-btns-buy" @click.prevent="addToCart">
          <div class="shop-list-product-btns-buy-text">В корзину</div>
          <img :src="cartIco" alt="">
        </div>
        <div class="shop-list-product-btns-like" @click.prevent="addToFavorites">
          <img :src="likeIco" alt="">
          <div class="shop-list-product-btns-like-text">В избранное</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Reviews from './Reviews'

import cartIco from 'src/assets/images/theproduct/ico/cart.svg'
import likeIco from 'src/assets/images/theproduct/ico/like.svg'

import { nf } from 'src/js/utils'
import { events } from 'src/main'
import { Cart } from 'src/js/utils/cart'
import { Fav } from 'src/js/utils/fav'

export default {
  name: 'TheProduct',

  components: {
    Reviews
  },

  props: {
    item: Object
  },

  data: () => ({
    cartIco,
    likeIco
  }),

  mounted () {
  },

  computed: {
    formatPrice () {
      if (!this.item.PRICE) return '—'

      let p = nf(this.item.PRICE)
      return p ? `${p} ₽` : ''
    }
  },

  methods: {
    addToCart () {
      Cart.add(this.item)
      events.$emit('cart:add')
      events.$emit('modal:addToCart', this.item.NAME)
    },
    addToFavorites () {
      Fav.add(this.item)
      events.$emit('fav:add')
      events.$emit('modal:addToFavorites', this.item.NAME)
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .shop-list-product {
    width: calc(100% / 4);
    min-height: 100%;
    padding: 10px;

    &-wrap {
      min-height: 100%;
      padding: 20px;

      display: flex;
      flex-direction: column;
      justify-content: stretch;

      border: 1px solid #F1EFEF;
      border-radius: $border-radius;

      transition: 0.2s ease-out;

      &:hover {
        border-color: $color-main;
        box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.05);

        .shop-list-product-image-btn {
          opacity: 1;
        }
      }

      /*&:hover {
        border-color: transparent;
        box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.05);

        .shop-list-product-image-btn {
          opacity: 1;
        }
      }*/
    }

    &-image {
      height: 200px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: transparent no-repeat center/contain;

      &-btn {
        padding: 10px 16px;

        font-weight: bold;
        font-size: 14px;
        line-height: 18px;

        background: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(85, 85, 85, 0.502);
        border-radius: $border-radius;

        transition: 0.2s ease-out;

        opacity: 0;
      }
    }

    &-name {
      margin-top: 20px;

      font-weight: bold;
      font-size: 20px;
      line-height: 19px;
    }

    &-category {
      margin-top: 10px;

      font-size: 14px;
      line-height: 18px;
      color: rgba(68, 68, 68, 0.5);
    }

    &-reviews {

    }

    &-available {
      margin-top: 20px;

      font-size: 18px;
      line-height: 12px;
      color: #CCCCCC;

      &.available {
        color: #219653;
      }
    }

    &-prices {
      margin-top: 20px;

      font-size: 32px;
      line-height: 23px;
    }

    &-btns {
      margin-top: 35px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &-buy {
        width: 45px;
        height: 40px;
        padding: 0 9px;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        border-radius: $border-radius;
        border: 1px solid $color-second;

        overflow: hidden;
        transition: 0.3s ease-out;

        &-text {
          margin-right: 8px;

          font-size: 14px;
          line-height: 18px;
          color: $color-second;
          text-transform: uppercase;
          white-space: nowrap;

          opacity: 0;

          transition: 0.3s ease-out;
        }

        &:hover {
          width: 125px;
        }

        &:hover &-text {
          opacity: 1;
        }
      }

      &-like {
        width: 42px;
        height: 40px;
        padding: 0 9px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        border-radius: $border-radius;
        border: 1px solid #DDDDDD;

        overflow: hidden;
        transition: 0.3s ease-out;

        &-text {
          margin-left: 8px;

          font-size: 14px;
          line-height: 18px;
          color: darken(#DDDDDD, 15%);
          text-transform: uppercase;
          white-space: nowrap;

          opacity: 0;

          transition: 0.3s ease-out;
        }

        &:hover {
          width: 137px;
        }

        &:hover &-text {
          opacity: 1;
        }
      }
    }
  }
</style>
