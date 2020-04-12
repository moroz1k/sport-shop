<template>
  <div class="header-btns-cart">
    <div class="header-btns-cart-wrap">
      <div class="header-btns-cart-ico">
        <svg width="30" height="26" viewBox="0 0 30 26" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.0343 0H25.4928C25.4594 0 25.431 0.015625 25.3984 0.0190549C25.3305 0.0259909 25.267 0.0372713 25.2034 0.0584604C25.1501 0.076067 25.102 0.0977896 25.0534 0.124162C24.9976 0.154573 24.9472 0.187576 24.8985 0.228659C24.8537 0.266311 24.8156 0.306403 24.7786 0.351601C24.7404 0.398171 24.7078 0.445579 24.6788 0.499543C24.6489 0.554954 24.6278 0.611814 24.6095 0.673247C24.5995 0.706555 24.5779 0.733308 24.5715 0.768293L24.0352 3.69962L1.11541 5.03902C1.02761 5.03293 0.950166 5.04573 0.851995 5.05488C0.342849 5.10122 -0.0351998 5.54756 0.00260499 6.05732C0.00565376 6.09573 0.0105319 6.13293 0.0178489 6.16951L1.6148 14.8793C1.98004 16.2299 3.10504 17.5933 4.79712 17.5933H21.4928L21.1353 19.547H7.08675C5.30809 19.547 3.86053 20.9945 3.86053 22.7732C3.86053 24.5524 5.30809 26 7.08675 26C8.86541 26 10.313 24.5524 10.313 22.7732C10.313 22.2885 10.1978 21.833 10.0054 21.4201H18.6321C18.4397 21.833 18.3246 22.2885 18.3246 22.7732C18.3246 24.5524 19.7721 26 21.5508 26C23.3294 26 24.777 24.5524 24.777 22.7732C24.777 21.5085 24.0384 20.4223 22.9761 19.8937L26.2736 1.87317H29.0343C29.5514 1.87317 29.9709 1.45366 29.9709 0.936585C29.9709 0.419512 29.5514 0 29.0343 0ZM22.5058 12.0569L18.5369 12.1193L18.7531 9.81913L22.9383 9.69367L22.5058 12.0569ZM2.67791 10.3011L6.64399 10.1822L6.90344 12.3019L3.05527 12.3623L2.67791 10.3011ZM7.89689 10.1446L12.2563 10.0139V12.2178L8.15863 12.2822L7.89689 10.1446ZM12.2563 8.76402L7.74445 8.89931L7.45619 6.54489L12.2563 6.26425V8.76402ZM13.505 6.19123L17.8636 5.93636L17.613 8.60343L13.505 8.7266V6.19123ZM12.2563 13.4669V15.7201H8.57951L8.31122 13.5289L12.2563 13.4669ZM13.505 13.4473L17.1632 13.3899L16.9442 15.7201H13.505V13.4473ZM13.505 12.1982V9.97652L17.4952 9.85686L17.2807 12.1389L13.505 12.1982ZM23.1682 8.43689L18.8708 8.5657L19.1248 5.86265L23.6881 5.59581L23.1682 8.43689ZM6.20756 6.61791L6.49148 8.93681L2.45024 9.058C2.27997 8.13285 2.14437 7.41387 2.02882 6.8622L6.20756 6.61791ZM3.44041 14.4665L3.28325 13.6079L7.05611 13.5486L7.32196 15.7201H4.79712C3.99468 15.7201 3.54773 14.8506 3.44041 14.4665ZM18.1986 15.7201L18.4194 13.3702L22.2766 13.3096L21.8355 15.7201H18.1986ZM8.4398 22.7732C8.4398 23.5195 7.83309 24.1268 7.08675 24.1268C6.34041 24.1268 5.7337 23.5195 5.7337 22.7732C5.7337 22.0268 6.34041 21.4201 7.08675 21.4201C7.83309 21.4201 8.4398 22.0268 8.4398 22.7732ZM21.5508 24.1268C20.8044 24.1268 20.1977 23.5195 20.1977 22.7732C20.1977 22.0268 20.8044 21.4201 21.5508 21.4201C22.2971 21.4201 22.9038 22.0268 22.9038 22.7732C22.9038 23.5195 22.2971 24.1268 21.5508 24.1268Z"/>
        </svg>
      </div>
      <div class="header-btns-cart-count" v-if="count">
        {{ count }}
      </div>
    </div>
    <div class="header-btns-cart-text">
      Корзина<br>
      <strong>{{ nf(summ) }} ₽</strong>
    </div>
    <div class="header-btns-cart-window-wrap">
      <div class="header-btns-cart-window-triangle"></div>
      <div class="header-btns-cart-window">
      <span v-if="!count">
        Пожалуйста, добавьте товары в корзину 🙂
      </span>
        <div class="header-btns-cart-window-list" v-if="count">
          <div class="header-btns-cart-window-item" v-for="(item) in items" :key="item.id">
            <div class="header-btns-cart-window-item-name">
              {{ item.name }}
            </div>
            <div class="header-btns-cart-window-item-price">
              {{ item.count }} x <strong>{{ nf(item.price) }} ₽</strong>
            </div>
            <div class="header-btns-cart-window-item-delete" @click="onDelete(item)"></div>
          </div>
        </div>
        <div class="header-btns-cart-window-summ" v-if="count">
          Сумма: <strong>{{ nf(summ) }} ₽</strong>
        </div>
        <router-link class="header-btns-cart-window-tocart link" to="/cart" v-if="count">Перейти в корзину</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Cart } from 'src/js/utils/cart'
import { nf } from 'src/js/utils'
import { events } from 'src/main'

export default {
  name: 'Cart',

  data: () => ({
    summ: 0,
    count: 0,
    items: []
  }),

  mounted () {
    this.setData()
    this.watch()
  },

  methods: {
    onDelete (item) {
      Cart.delete(item)
      events.$emit('cart:delete')
    },
    setData () {
      let { summ, count } = Cart.summ()
      let items = Cart.get()

      this.summ = summ
      this.count = count
      this.items = items
    },
    watch () {
      events.$on('cart:add', () => this.setData())
      events.$on('cart:delete', () => this.setData())
    },
    nf (summ) {
      return nf(summ)
    }
  }
}
</script>

<style lang="scss">
  .header-btns-cart {
    margin-left: 30px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: 0.1s ease-out;

    &:hover &-wrap, &:hover &-text {
      opacity: .7;
    }

    &:hover &-window-wrap {
      visibility: visible;
      opacity: 1;
    }

    %count-style {
      position: absolute;
      top: -19px;
      right: -15px;

      width: 19px;
      height: 19px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: bold;
      font-size: 13px;
      line-height: 13px;
      color: white;

      background-color: #F48221;
      border-radius: 50%;
    }

    &-wrap {
      position: relative;
    }

    &-count {
      @extend %count-style;
    }

    &-text {
      margin-left: 20px;

      font-size: 14px;
      line-height: 20px;

      strong {
        font-weight: bold;
      }
    }

    &-window {
      min-width: 400px;
      padding: 24px;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-end;

      font-size: 14px;
      background: white;

      border-radius: $border-radius;
      border-color: $color-main;
      box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.15);

      cursor: default;

      &-wrap {
        padding-top: 15px;

        position: absolute;
        top: 100%;
        right: 0;
        z-index: 2;

        visibility: hidden;
        opacity: 0;

        transition: 0.1s ease-out;
      }

      &-triangle {
        display: block;

        height: 20px;
        width: 20px;

        background-color: white;
        border: inherit;
        border-radius: 0 $border-radius 0 0;

        position: absolute;
        top: 5px;
        right: 40px;

        box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.15);
        clip-path: polygon(100% 100%, 0% 0%, 100% 0%);
        transform: rotate(-45deg);
      }

      &-summ {
        margin-top: 16px;
        margin-left: auto;

        strong {
          font-size: 16px;
          font-weight: 800;
        }
      }

      &-list {
        width: 100%;
      }

      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & + & {
          margin-top: 16px;
        }

        &-name {
        }

        &-price {
          margin: 0 8px 0 auto;

          font-size: 12px;

          white-space: nowrap;

          strong {
            font-size: 16px;
            font-weight: 800;
          }
        }

        &-delete {
          width: 20px;
          height: 20px;

          background: transparent url($images + '/ico/close.svg') no-repeat center/contain;

          cursor: pointer;

          &:hover {
            opacity: .7;
          }
        }
      }

      &-tocart {
        display: inline-block;
        margin: 16px auto 0 0;
      }
    }
  }
</style>
