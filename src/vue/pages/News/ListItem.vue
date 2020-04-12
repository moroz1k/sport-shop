<template>
  <div class="news-list-item" :key="item.ID">
    <div class="news-list-item-data">{{item.DATE}}</div>
    <router-link :to="`/news/${item.CODE}.html`" class="news-list-item-name link">{{item.NAME}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'ListItem',

  props: {
    item: Object
  }
}
</script>

<style lang="scss" type="text/scss">
  .news-list-item {
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
</style>
