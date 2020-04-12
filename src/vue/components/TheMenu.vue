<template>
  <div class="menu">
    <div class="menu-wrap container">
      <div class="menu-btn" @click="toggle">
        <img :src="menuIco" alt="">
        Каталог
      </div>

      <transition name="fade">
        <Dropdown v-if="isOpen" @close="close"/>
      </transition>

      <div class="menu-other">
        <router-link to="/pages/sale.html" class="menu-other-item">
          Скидки
        </router-link>
        <router-link to="/pages/shops.html" class="menu-other-item">
          Магазины
        </router-link>
        <router-link to="/pages/delivery.html" class="menu-other-item">
          Доставка
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import menuIco from '../../assets/images/ico/menu.svg'
import Dropdown from './TheMenu/Dropdown'

export default {
  name: 'Menu',

  components: { Dropdown },

  data: () => ({
    menuIco,
    isOpen: false
  }),

  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    close () {
      this.isOpen = false
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .menu {
    height: 50px;
    background: #F48221;

    &-wrap {
      height: 100%;
      padding: 0;

      display: flex;

      position: relative;
    }

    &-btn {
      width: calc(100% / 4 - 20px);
      padding: 0 30px;

      display: flex;
      align-items: center;

      font-size: 22px;
      font-family: $font-second;
      color: #FFF;
      text-transform: uppercase;
      cursor: pointer;

      img {
        margin-top: 0px;
        margin-right: 10px;
      }
    }

    &-other {
      width: calc(100% / 4 * 3 + 30px);
      height: 100%;
      padding: 0 15px;

      display: flex;

      background-color: #F47A21;

      &-item {
        height: 100%;
        padding: 0 15px;

        display: flex;
        align-items: center;

        position: relative;

        font-size: 22px;
        font-family: $font-second;
        color: #FFF;
        text-transform: uppercase;

        & + &::after {
          content: '';
          position: absolute;
          left: 0;
          top: calc(50% - 15px);

          width: 2px;
          height: 30px;

          background-color: rgba(#FFF, .3);
        }
      }
    }
  }
</style>
