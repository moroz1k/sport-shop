<template>
  <div class="news-list container">
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
      isLoad: 'news/isLoad',
      isLoading: 'news/isLoading',
      paginationList: 'news/paginationList'
    })
  },

  mounted () {
    if (!this.isLoad) this.fetchList()
  },

  methods: {
    ...mapActions({
      fetchList: 'news/fetchList'
    })
  }
}
</script>

<style lang="scss" type="text/scss">
  .news-list {
      margin-top: 45px;
  }
</style>
