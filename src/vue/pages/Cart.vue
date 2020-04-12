<template>
  <div class="cart">
    <div class="container" v-if="!isLoad">
      <Indi />
    </div>

    <Bread :list="[{
      title:'Козрина',
      to:'/cart'
      }]" />

    <div class="cart-wrap container">

      <div class="cart-title">
        <h1>Корзина</h1>
      </div>

      <Indicator
        :steps="steps"
      />

      <div class="cart-steps">
        <component
          :is="`Step${steps.current}`"
          :list="list"
          :contact="contact"
        />
      </div>

      <Btns
        @next="next"
        @back="back"
        @complete="complete"
        :steps="steps"
      />
    </div>
  </div>
</template>

<script>
import { Cart } from 'src/js/utils/cart'

import Bread from '../components/TheBread'
import Indi from '../components/Indicator'
import Step1 from './Cart/Step1'
import Step2 from './Cart/Step2'
import Step3 from './Cart/Step3'
import Btns from './Cart/Btns'
import Indicator from './Cart/Indicator'

export default {
  name: 'Cart',

  components: {
    Indicator,
    Btns,
    Indi,
    Bread,
    Step1,
    Step2,
    Step3
  },

  data: () => ({
    isLoad: true,
    steps: {
      current: 1,
      list: [
        1,
        2,
        3
      ]
    },
    list: [],
    contact: {
      name: '',
      phone: '',
      email: '',
      note: ''
    }
  }),

  mounted () {
    this.list = Cart.get()
  },

  methods: {
    next () {
      this.steps.current++
    },
    back () {
      this.steps.current--
    },
    complete () {

    }
  }
}
</script>

<style lang="scss">
  .cart {
    padding-bottom: 64px;

    &-title {
      margin-top: 45px;
    }

    &-step {

      &-block {
        padding: 20px;

        border: 1px solid #F1EFEF;
        border-radius: $border-radius;

        & + & {
          margin-left: 20px;
        }
      }
    }
  }
</style>
