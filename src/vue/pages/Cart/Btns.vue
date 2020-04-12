<template>
  <div class="cart-btns">
    <div
      class="btn btn-grey cart-btns-btn cart-btns-back"
      v-if="steps.current !== 1"
      @click="$emit('back')">Назад
    </div>
    <div
      class="btn cart-btns-btn cart-btns-next"
      v-if="steps.current !== steps.list[steps.list.length - 1]"
      @click="$emit('next')">Далее
    </div>
    <div
      class="btn cart-btns-btn cart-btns-complete"
      v-if="steps.current === steps.list[steps.list.length - 1]"
      @click="$emit('complete')">Завершить
    </div>
  </div>
</template>

<script>
export default {
  name: 'Btns',

  props: {
    steps: Object
  }
}
</script>

<style lang="scss">
  .cart-btns {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &-btn {
      max-width: 200px;

      & + & {
        margin-left: 8px;
      }
    }

    &-back {
    }

    &-next {
    }

    &-complete {
    }
  }
</style>
