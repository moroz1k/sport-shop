<template>
  <div class="favorites-wrap">
    <div class="container" :style="{margin: '40px auto'}" v-if="isLoading || !isLoad">
      <Indi />
    </div>

    <div class="favorites container" v-if="!isLoading && isLoad">
      <div class="favorites-title">
        <h1>Избранное</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Indi from '../components/Indicator'

export default {
  name: 'Favorites',

  components: { Indi },

  data: () => ({
    isLoad: true,
    isLoading: false
  })
}
</script>

<style lang="scss">
  .favorites {
    &-title {
      margin-top: 45px;
    }
  }
</style>
