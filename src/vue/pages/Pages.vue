<template>
  <div class="pages-wrap">
    <div class="pages container">
      <div class="pages-title">
        <h1>Страница {{$route.params.code}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pages'
}
</script>

<style lang="scss">
  .pages {

    &-title {
      margin-top: 45px;
    }

    &-wrap {

    }
  }
</style>
