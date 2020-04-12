<template>
  <div class="count" :style="containerStyle">
    <div class="count-minus" @click="updateValue(value - 1)">
      <img :src="minus" alt="Уменьшить">
    </div>
    <div class="count-input">
      <input type="text" @input="updateValue($event.target.value)" :value="value">
    </div>
    <div class="count-plus" @click="updateValue(value + 1)">
      <img :src="plus" alt="Увеличить">
    </div>
  </div>
</template>

<script>
import plus from 'src/assets/images/ico/plus.svg'
import minus from 'src/assets/images/ico/minus.svg'

export default {
  name: 'CountUse',

  props: {
    value: {
      type: Number,
      default: 1
    },
    containerStyle: {
      default: () => ({})
    }
  },

  data: () => ({
    plus,
    minus
  }),

  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .count {
    display: flex;
    align-items: center;

    &-minus {
      width: 16px;
      height: 16px;
      margin-right: 8px;

      cursor: pointer;
    }

    &-input {
      input {
        margin-top: 0;
        max-width: 40px;

        text-align: center;
      }
    }

    &-plus {
      width: 16px;
      height: 16px;
      margin-left: 8px;

      cursor: pointer;
    }
  }
</style>
