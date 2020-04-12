<template>
  <div class="blog-item">
    <div class="blog-item-wrap">
      <Bread
        :list="[
        {
          title: 'Интересные статьи',
          to: '/blog'
        },
        {
          title: item.NAME,
          to: `/blog/${item.CODE}.html`
        }
      ]"
        v-if="isLoad"
      />

      <div class="blog-item-title-wrap container" v-if="isLoad">
        <h1 class="blog-item-title">{{item.NAME}}</h1>
        <div class="blog-item-date">{{item.DATE}}</div>
        <div class="blog-item-text" v-html="item.DETAIL_TEXT"></div>
      </div>

      <Indicator v-if="!isLoad"/>
    </div>
  </div>
</template>

<script>
import Bread from '../components/TheBread'
import Indicator from '../components/Indicator'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'BlogItem',

  components: {
    Bread,
    Indicator
  },

  mounted () {
    this.fetchItem()
  },

  computed: {
    ...mapGetters({
      isLoad: 'blogItem/isLoad',
      item: 'blogItem/item'
    })
  },

  methods: {
    ...mapActions({
      fetchItem: 'blogItem/fetchItem'
    })
  }
}
</script>

<style lang="scss">
  .blog-item {
    &-title {
      margin-top: 45px;
    }
    &-date {
      margin-top: 24px;
    }
    &-text {
      margin-top: 45px;
      white-space: normal;
    }
  }
</style>
