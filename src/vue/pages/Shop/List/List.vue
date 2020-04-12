<template>
  <div class="shop-list container">
    <div class="shop-list-wrap" v-if="isLoad">
      <ListItem :item="item" v-for="(item, key) in paginationList" :key="`slw${key}`"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ListItem from './ListItem/ListItem'

export default {
  name: 'List',

  components: {
    ListItem
  },

  computed: {
    ...mapGetters({
      isLoad: 'shop/isLoad',
      isLoading: 'shop/isLoading',
      paginationList: 'shop/paginationList'
    })
  }
}
</script>

<style type="text/scss" lang="scss">
  .shop-list {
    margin-top: 15px;

    &-wrap {
      margin: 0 -10px;

      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
