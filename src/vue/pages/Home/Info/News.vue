<template>
  <div class="home-info-news">
    <h2>Новости</h2>

    <div class="home-info-news-block">
      <transition-group name="fade">
        <div class="home-info-news-block-item" v-for="item in news" :key="item.ID">
          <div class="home-info-news-block-item-data">{{item.DATE}}</div>
          <router-link :to="`/news/${item.CODE}.html`" class="home-info-news-block-item-name link">{{item.NAME}}</router-link>
        </div>
      </transition-group>
      <Indi
        v-if="!isLoad"
      />
    </div>
  </div>
</template>

<script>
import Indi from '../../../components/Indicator'

export default {
  name: 'News',
  components: { Indi },
  props: {
    news: Array,
    isLoad: Boolean
  }
}
</script>

<style type="text/scss" lang="scss">
  .home-info-news {

    &-block {
      margin-top: 15px;
      padding: 20px;

      border: 1px solid #F1EFEF;
      border-radius: $border-radius;

      &-item {
        &-data {
          font-weight: bold;
          font-size: 14px;
          line-height: 19px;
        }

        &-name {
          margin-top: 8px;
          font-size: 14px;
          line-height: 19px;
        }

        & + & {
          margin-top: 20px;
        }
      }
    }
  }
</style>
