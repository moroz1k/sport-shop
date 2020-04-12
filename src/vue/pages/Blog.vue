<template>
  <div class="blog">
    <div class="blog-wrap">
      <Bread
        :list="[
        {
          title: 'Интересные статьи',
          to: '/blog'
        }
      ]"
      />

      <div class="blog-title-wrap container">
        <h1 class="blog-title">Интересные статьи</h1>
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
import List from './Blog/List'
import Pagination from '../components/Pagination'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Blog',

  components: {
    Bread,
    List,
    Pagination,
    Indicator
  },
  computed: {
    ...mapGetters({
      isLoad: 'blog/isLoad',
      perPage: 'blog/perPage',
      count: 'blog/count'
    }),
    page () {
      return +(this.$route.params.page || 1)
    }
  },
  methods: {
    ...mapMutations([
      'blog/setPage'
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
  .blog {
    &-title {
      margin-top: 45px;
    }
  }
</style>
