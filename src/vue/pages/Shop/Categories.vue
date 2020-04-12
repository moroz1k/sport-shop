<template>
  <div class="shop-categories container" v-if="sections.length">
    <div class="shop-categories-wrap container">
      <div class="shop-categories-title">
        Список подкатегорий
      </div>
      <div class="shop-categories-list">
        <router-link
          class="shop-categories-item"
          v-for="item in sections"
          :key="`sci${item.ID}`"
          :to="getPath(item)">
          {{item.NAME}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Categories',

  computed: {
    ...mapGetters({
      sections: 'shop/sections'
    })
  },

  methods: {
    getPath (item) {
      return `/shop/${this.$route.params.mainCategory}/${encodeURI(item.CODE)}`
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .shop-categories {
    margin-top: 20px;

    &-wrap {
      padding: 16px 20px 20px;

      border-radius: $border-radius;
      border: 1px solid #F1EFEF;
    }

    &-title {
      padding-bottom: 15px;

      font-size: 14px;
      line-height: 18px;

      border-bottom: 1px solid #F1EFEF;
    }

    &-list {
      margin: 0 -20px;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    &-item {
      padding: 20px 20px 0;

      font-size: 14px;
      line-height: 18px;

      & + & {
      }
    }
  }
</style>
