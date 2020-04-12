<template>
  <div class="bread container">
    <div class="bread-wrap">
      <router-link
        to="/"
        class="bread-item">
        Главная
      </router-link>
      <router-link
        class="bread-item"
        :to="to"
        v-for="({title, to}) in list"
        :key="`bi${title}`">{{title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBreadcrumbs',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .bread {
    margin-top: 20px;

    &-wrap {
      display: flex;
      align-items: center;

      font-size: 12px;
      line-height: 12px;
    }

    &-item {
      & + &:before {
        content: '\00A0-\00A0';
      }
    }
  }
</style>
