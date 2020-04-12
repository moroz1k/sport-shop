<template>
  <div class="shop">
    <div class="container" :style="{margin: '40px auto'}" v-if="isLoading || !isLoad">
      <Indi />
    </div>
    <div class="shop-wrap" v-if="!isLoading && isLoad">
      <Bread
        :list="getBread"/>

      <div class="shop-title-wrap container">
        <h1 class="shop-title">{{getName}}</h1>
      </div>

      <Categories/>

      <Sorting/>

      <List/>

      <Pagination
        :page="page"
        :per-page="perPage"
        :count="count"
        @set-page="setPage"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

import Bread from '../components/TheBread'
import Categories from './Shop/Categories'
import Sorting from './Shop/Sorting'
import List from './Shop/List/List'
import Pagination from '../components/Pagination'
import Indi from '../components/Indicator'

export default {
  name: 'Shop',

  components: {
    Bread,
    Categories,
    Sorting,
    List,
    Pagination,
    Indi
  },

  mounted () {
    if (!this.isLoad && !this.isLoading) this.fetchList({ params: this.$route.params })
  },

  watch: {
    '$route': {
      handler () {
        if (this.page === 1) {
          this.fetchList({ params: this.$route.params })
        }
      },
      immediate: true
    }
  },

  computed: {
    ...mapGetters({
      isLoad: 'shop/isLoad',
      isLoading: 'shop/isLoading',
      // page: 'shop/page',
      perPage: 'shop/perPage',
      count: 'shop/count',
      category: 'shop/category',
      mainCategory: 'shop/mainCategory'
    }),
    page () {
      return +(this.$route.params.page || 1)
    },
    getName () {
      if (Object.keys(this.category).length) return this.category.NAME
      if (Object.keys(this.mainCategory).length) return this.mainCategory.NAME
      return 'Каталог'
    },
    getBread () {
      let bread = []

      if (Object.keys(this.mainCategory).length) bread.push({ title: this.mainCategory.NAME, to: `/shop/${this.$route.params.mainCategory}/` })
      if (Object.keys(this.category).length) bread.push({ title: this.category.NAME, to: `/shop/${this.$route.params.mainCategory}/${this.$route.params.category}/` })

      return bread
    }
  },

  methods: {
    ...mapActions({
      fetchList: 'shop/fetchList'
    }),
    ...mapMutations([
      'shop/setPage'
    ]),
    setPage (page) {
      let path = `/shop`

      if (this.$route.params.mainCategory) path = path + '/' + this.$route.params.mainCategory
      if (this.$route.params.category) path = path + '/' + this.$route.params.category
      if (+page !== 1) {
        path = path + '/' + page
      } else {
        path = path + '/'
      }

      this.$router.push({ path })
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .shop {
    &-wrap {
      padding-bottom: 60px;
    }

    &-title {
      &-wrap {
        margin-top: 45px;
      }
    }
  }
</style>
