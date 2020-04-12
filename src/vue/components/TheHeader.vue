<template>
  <div class="header">
    <div class="header-wrap container">
      <router-link to="/" class="header-logo"/>
      <router-link to="/" class="header-descr">Спортивное питание<br>и товары</router-link>
      <div class="header-search"></div>
      <div class="header-btns">
        <Favorites />
        <Cart />
      </div>
      <div class="header-phones" @click="openPhone">
        <div class="header-phones-ico">
          <img :src="phoneIco" alt="">
        </div>
        <div class="header-phones-items">
          +7 812 579 0090<br>
          +7 931 530 0282
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import phoneIco from '../../assets/images/ico/phone.svg'
import { events } from '../../main'

import Cart from './TheHeader/Cart'
import Favorites from './TheHeader/Favorites'

export default {
  name: 'Header',

  components: {
    Favorites,
    Cart
  },

  data: () => ({
    phoneIco
  }),

  methods: {
    openPhone () {
      events.$emit('modal:phone')
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .header {
    height: 80px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

    &-wrap {
      height: 100%;

      display: flex;
      align-items: center;
    }

    &-logo {
      width: 50px;
      height: 100%;
      margin-right: 20px;

      background: transparent url("../../assets/images/header/logo.png") no-repeat center/100%;
    }

    &-btns {
      margin-left: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: #7A7A7A;
      }
    }

    &-phones {
      margin-left: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      transition: 0.1s ease-out;

      &:hover {
        opacity: .7;
      }

      &-ico {

      }

      &-items {
        margin-left: 10px;

        font-size: 18px;
        line-height: 20px;
      }
    }
  }
</style>
