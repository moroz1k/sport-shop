<template>
  <div class="news-item">
    <div class="news-item-wrap">
      <Bread
        :list="[
        {
          title: 'Новости',
          to: '/news'
        },
        {
          title: item.NAME,
          to: `/news/${item.CODE}.html`
        }
      ]"
        v-if="isLoad"
      />

      <div class="news-item-title-wrap container" v-if="isLoad">
        <h1 class="news-item-title">{{item.NAME}}</h1>
        <div class="news-item-date">{{item.DATE}}</div>
        <div class="news-item-text" v-html="item.DETAIL_TEXT"></div>
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
  name: 'NewsItem',

  components: {
    Bread,
    Indicator
  },

  mounted () {
    this.fetchItem()
  },

  computed: {
    ...mapGetters({
      isLoad: 'newsItem/isLoad',
      item: 'newsItem/item'
    })
  },

  methods: {
    ...mapActions({
      fetchItem: 'newsItem/fetchItem'
    })
  }
}
</script>

<style lang="scss">
  .news-item {

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
