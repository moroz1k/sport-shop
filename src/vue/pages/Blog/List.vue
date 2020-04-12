<template>
  <div class="blog-list container">
    <transition-group name="fade">
      <ListItem :item="item" v-for="(item, key) in paginationList" :key="`bl${key}`"/>
    </transition-group>
  </div>
</template>

<script>
import ListItem from './ListItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'List',

  components: {
    ListItem
  },

  computed: {
    ...mapGetters({
      isLoad: 'blog/isLoad',
      isLoading: 'blog/isLoading',
      paginationList: 'blog/paginationList'
    })
  },

  mounted () {
    if (!this.isLoad) this.fetchList()
  },

  methods: {
    ...mapActions({
      fetchList: 'blog/fetchList'
    })
  }
}
</script>

<style lang="scss" type="text/scss">
  .blog-list {

  }
</style>
