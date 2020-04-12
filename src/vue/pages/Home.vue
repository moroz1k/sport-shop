<template>
  <div class="home">
    <div class="home-wrap">
      <HorizontalItems
        title="Популярные товары"
        :items="home.popular || []"
        :isLoad="isLoad"
      />
      <Advantages/>
      <Info
        :info="info"
        :isLoad="isLoad"
      />
      <Descr/>
    </div>
  </div>
</template>

<script>
import HorizontalItems from '../components/HorizontalItems'
import Advantages from './Home/Advantages'
import Info from './Home/Info'
import Descr from './Home/Descr'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  mounted () {
    this.fetch()
  },

  components: {
    HorizontalItems,
    Advantages,
    Info,
    Descr
  },

  computed: {
    ...mapGetters({
      isLoad: 'home/isLoad',
      home: 'home/home'
    }),

    info () {
      return this.home.info || {}
    }
  },

  methods: {
    ...mapActions({
      fetch: 'home/fetch'
    })
  }
}
</script>

<style type="text/scss" lang="scss">
  .home {
    padding-bottom: 70px;
  }
</style>
