<template>
  <div class="stars">
    <div class="stars-empty">
      <div class="stars-item" v-for="(_, key) in empty" :key="`slpri${key}`"></div>
    </div>
    <div class="stars-full">
      <div class="stars-item-full" v-for="(_, key) in +full" :key="`slpri${key}`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stars',

  props: {
    full: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    empty: 5
  })
}
</script>

<style lang="scss">
  .stars {
    position: relative;
    height: 20px;

    &-empty, &-full {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
    }

    &-item, &-item-full {
      width: 19px;
      height: 19px;

      background: transparent url($images + '/ico/star-empty.svg') no-repeat center/100%;

      & + & {
        margin-left: 8px;
      }
    }

    &-item-full {
      background-image: url($images + '/ico/star-full.svg');
    }
  }
</style>
