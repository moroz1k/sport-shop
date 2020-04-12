<template>
  <div class="cart-steps-indicator">
    <div class="cart-steps-indicator-step-wrap" v-for="step in steps.list" :key="`step${step}`">
      <div class="cart-steps-indicator-step" :class="{active: step <= steps.current}">{{step}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Indicator',

  props: {
    steps: Object
  }
}
</script>

<style lang="scss">
  .cart-steps-indicator {
    margin: 0 -30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: hidden;

    &-step {
      width: 100px;
      height: 100px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: $font-main;
      font-size: 48px;
      color: #F1EFEF;

      border-radius: 50%;
      border: 3px solid #F1EFEF;

      transition: 0.1s ease-out;

      &-wrap {
        padding: 30px;
        background: white;

        position: relative;
      }

      &:before {
        content: '';

        width: calc(1220px / 2);
        height: 3px;

        position: absolute;
        top: calc(50% - 2px);
        right: 0;
        z-index: -1;

        background: #F1EFEF;

        transition: 0.1s ease-out;
      }

      &.active {
        color: $color-main;
        border-color: $color-main;

        &:before {
          background: $color-main;
        }
      }
    }
  }
</style>
