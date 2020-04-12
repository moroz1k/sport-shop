<template>
  <div class="product-info">
    <div class="product-info-price-shop">
      <div class="product-info-price-shop-title">
        Цена в магазине:
      </div>
      <div class="product-info-price-shop-price">
        {{formatPriceShop}}
      </div>
    </div>
    <div class="product-info-price-site">
      <div class="product-info-price-site-title">
        Цена на сайте:
      </div>
      <div class="product-info-price-site-price">
        {{formatPrice}}
      </div>
    </div>
    <hr class="product-info-hr">
    <div class="product-info-features">
      <div class="product-info-features-item">
        Бренд: <strong>{{item.PROPERTY_BRAND_NAME}}</strong>
      </div>
      <div class="product-info-features-item">
        Страна: <strong>{{item.PROPERTY_COUNTRY_NAME}}</strong>
      </div>
      <div class="product-info-features-item">
        Количество порций: <strong>{{item.PROPERTY_QPORTION_VALUE}}</strong>
      </div>
      <div class="product-info-features-item">
        Цена за 1 порцию: <strong>{{formatPricePortions}}</strong>
      </div>
    </div>
    <hr class="product-info-hr">
    <div class="product-info-available" :class="{available: isAvailible}">
      {{isAvailible ? 'В наличии' : 'Нет в наличии'}}
    </div>
    <div class="product-info-btns">
      <button
        class="product-info-btn"
        @click.prevent="addToCart"
        :disabled="!isAvailible"
      >
        В корзину
      </button>
      <button
        class="product-info-btn-like"
        @click.prevent="addToFavorites"
      >
        В избранное
      </button>
    </div>
  </div>
</template>

<script>
import { nf } from 'src/js/utils'
import { events } from 'src/main'
import { Cart } from 'src/js/utils/cart'
import { Fav } from 'src/js/utils/fav'

export default {
  name: 'Info',

  props: {
    item: Object
  },

  data: () => ({}),

  computed: {
    formatPrice () {
      if (!this.item.PRICE) return '—'
      let p = nf(this.item.PRICE)
      return p ? `${p} ₽` : ''
    },
    formatPriceShop () {
      if (!this.item.PROPERTY_PRICE_STORE_VALUE) return '—'
      let p = nf(this.item.PROPERTY_PRICE_STORE_VALUE)
      return p ? `${p} ₽` : ''
    },
    formatPricePortions () {
      if (!this.item.PROPERTY_PRICEPORTION_VALUE) return '—'
      let p = nf(this.item.PROPERTY_PRICEPORTION_VALUE)
      return p ? `${p} ₽` : ''
    },
    isAvailible () {
      return this.item.CATALOG_AVAILABLE === 'Y' && this.item.CATALOG_QUANTITY !== '0'
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

<style lang="scss">
  .product-info {
    min-width: 390px;
    margin-left: 20px;
    padding: 20px;

    border: 1px solid #F4F3F3;
    border-radius: 3px;

    &-price {

      &-shop {
        margin-bottom: 8px;

        &-title {
          font-size: 10px;
          line-height: 13px;
          text-transform: uppercase;
        }

        &-price {
          font-size: 24px;
          line-height: 31px;
          text-transform: uppercase;
        }
      }

      &-site {
        &-title {
          font-size: 10px;
          line-height: 13px;
          text-transform: uppercase;
        }

        &-price {
          font-size: 36px;
          line-height: 47px;
          text-transform: uppercase;
          color: #F48221;
        }
      }
    }

    &-hr {
      width: 100%;
      height: 1px;
      margin: 20px 0;

      border: none;
      outline: 0;
      background-color: #F4F3F3;
    }

    &-features {
      &-item {
        font-size: 14px;
        line-height: 21px;

        strong {
          font-weight: bold;
        }
      }
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

    &-btns {
      margin-top: 10px;

      display: flex;
      align-items: center;
    }

    &-btn {
      height: 40px;
      padding: 0 53px 0 20px;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      font-size: 14px;
      line-height: 18px;
      font-weight: bold;
      text-transform: uppercase;
      color: #FFFFFF;

      background: #F48221 url($images + '/ico/cart.svg') no-repeat calc(100% - 20px)/25px;
      border-radius: 3px;
      border: none;

      transition: 0.2s ease-out;
      cursor: pointer;

      &:disabled {
        opacity: .3;
        pointer-events: none;
      }

      &:hover {
        opacity: .7;
      }

      &-like {
        width: 42px;
        height: 40px;
        padding: 0 9px 0 37px;
        margin-left: 8px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        border-radius: $border-radius;
        border: 1px solid #DDDDDD;
        background: transparent url($images + '/theproduct/ico/like.svg') no-repeat 12px/22px;

        color: transparent;
        font-size: 14px;
        line-height: 18px;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        transition: 0.3s ease-out;

        cursor: pointer;

        &:hover {
          width: 137px;

          color: darken(#DDDDDD, 15%);
        }

        &:hover &-text {
          opacity: 1;
        }
      }
    }
  }
</style>
