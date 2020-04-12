<template>
  <div class="menu-dropdown-wrap">
    <div class="menu-dropdown-background" @click="$emit('close')"></div>
    <div class="menu-dropdown">
      <div class="menu-dropdown-list">
        <div class="menu-dropdown-item"
             v-for="({ICO, NAME, LIST, ID, URL}) in listik"
             :key="`mdi${ID}`"
             :style="{maxWidth: `${100 / listik.length}%`}"
        >
          <div class="menu-dropdown-item-ico" :style="{backgroundImage: `url('${ICO}')`}"></div>
          <div class="menu-dropdown-item-right">
            <router-link
              class="menu-dropdown-item-title"
              :to="URL"
              @click.native="$emit('close')">
              {{NAME}}
            </router-link>
            <router-link
              class="menu-dropdown-item-section"
              v-for="section in LIST"
              :to="`${URL}/${section.CODE}`"
              @click.native="$emit('close')">
              {{section.NAME}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ico6 from 'src/assets/images/menu/0.svg' // brands
import ico2 from 'src/assets/images/menu/1.svg' // Спортивное питание
import ico3 from 'src/assets/images/menu/2.svg' // Спортивные товары
// import ico18 from 'src/assets/images/menu/3.svg' // Правильное питание
import ico20 from 'src/assets/images/menu/4.svg' // Распродажа
import ico18 from 'src/assets/images/menu/5.svg' // Футбол

export default {
  name: 'Dropdown',

  data: () => ({
    ico6,
    ico2,
    ico3,
    ico18,
    ico20
  }),
  computed: {
    ...mapGetters({
      sections: 'common/sections'
    }),
    listik () {
      let list = [...Object.values(this.sections)]

      let addPicture = (item) => ((item.ICO = this[`ico${item.ID}`], item))
      list = list.map(addPicture)

      return list
    }
  }
}
</script>

<style lang="scss" type="text/scss">
  .menu-dropdown {
    width: 100%;
    padding: 20px;

    display: block;

    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;

    background: white;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.05);

    &-wrap {

    }

    &-background {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;

      width: 100%;
      height: 100%;

      background: rgba(0, 0, 0, 0.05);
    }

    &-list {
      display: flex;
    }

    &-item {
      width: 100%;

      display: flex;

      &-ico {
        width: 40px;
        height: 40px;
        margin-right: 4px;

        background: transparent no-repeat center/25px 25px;
      }

      &-title {
        margin-top: 4px;

        display: inline;

        font-size: 24px;
        line-height: 27px;
      }

      &-section {
        margin-top: 8px;

        display: block;

        font-size: 16px;
        line-height: 21px;
      }

      & + & {
        padding-left: 20px;
      }
    }
  }
</style>
