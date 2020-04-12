<template>
  <div class="home-info container">
    <div class="home-info-wrap">
      <div class="home-info-item">
        <News
          :news="news"
          :isLoad="isLoad"
        />
      </div>
      <div class="home-info-item">
        <Reviews
          :reviews="reviews"
          :isLoad="isLoad"
        />
      </div>
      <div class="home-info-item">
        <Articles
          :blog="blog"
          :isLoad="isLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
import News from './Info/News'
import Reviews from './Info/Reviews'
import Articles from './Info/Blog'

export default {
  name: 'Info',

  components: {
    News,
    Reviews,
    Articles
  },

  props: {
    info: Object,
    isLoad: Boolean
  },

  computed: {
    news () {
      return this.info?.news || []
    },
    reviews () {
      return this.info?.reviews || []
    },
    blog () {
      return this.info?.blog || []
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .home {
    &-info {
      margin-top: 60px;

      &-wrap {
        display: flex;
        margin: 0 -10px;
      }

      &-item {
        width: 33.3%;
        padding: 0 10px;
      }
    }
  }
</style>
