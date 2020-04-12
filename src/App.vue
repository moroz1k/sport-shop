<template>
  <div id="app">
    <TheHeader/>
    <TheSlider/>
    <TheMenu/>

    <TransitionWrap>
      <router-view
        :key="$route.fullPath"
      />
    </TransitionWrap>

    <TheFooter/>
    <TheModals/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import TheHeader from './vue/components/TheHeader'
import TheFooter from './vue/components/TheFooter'
import TheSlider from './vue/components/TheSlider'
import TheMenu from './vue/components/TheMenu'
import TheModals from './vue/components/TheModals'
import TransitionWrap from './vue/components/TransitionWrap'

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter,
    TheSlider,
    TheMenu,
    TheModals,
    TransitionWrap
  },

  data: () => ({
    loader: document.getElementById('loader')
  }),

  mounted () {
    this.fetchCommon()
      .then(() => this.loader.classList.add('disabled'))
  },

  methods: {
    ...mapActions({
      fetchCommon: 'common/fetch'
    })
  }
}
</script>

<style type="text/scss" lang="scss">
  #app {
  }
</style>
