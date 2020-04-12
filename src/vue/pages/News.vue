<template>
  <div class="news">
    <div class="news-wrap">
      <Bread
        :list="[
        {
          title: 'Новости',
          to: '/news'
        }
      ]"
      />

      <div class="news-title-wrap container">
        <h1 class="news-title">Новости</h1>
      </div>
      <Indicator v-if="!isLoad"/>

      <List/>
      <Pagination
        v-show="isLoad"
        :page="page"
        :per-page="perPage"
        :count="count"
        @set-page="setPage"
      />
    </div>
  </div>
</template>

<script>
import Bread from '../components/TheBread'
import Indicator from '../components/Indicator'
import List from './News/List'
import Pagination from '../components/Pagination'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'News',

  components: {
    Bread,
    List,
    Pagination,
    Indicator
  },
  computed: {
    ...mapGetters({
      isLoad: 'news/isLoad',
      perPage: 'news/perPage',
      count: 'news/count'
    }),
    page () {
      return +(this.$route.params.page || 1)
    }
  },
  methods: {
    ...mapMutations([
      'news/setPage'
    ]),
    setPage (page) {
      let params = {}
      if (page !== 1) {
        params.page = page
      } else {
        params.page = null
      }
      this.$router.push({ params })
    }
  }
}
</script>

<style lang="scss">
  .news {

    &-title {
      margin-top: 45px;
    }
  }
</style>
