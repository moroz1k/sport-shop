<template>
  <div class="cart-step1">
    <div class="cart-step-block cart-step1-block1">
      <h2>Ваш заказ</h2>

      <div class="cart-step1-list">
        <div
          class="cart-step1-item"
          v-for="item in list"
          :key="`csi${item.id}`">

          <div class="cart-step1-item-name">{{item.name}}</div>
          <div class="cart-step1-item-count">
            <CountUse
              v-model="item.count"
            />
          </div>
          <div class="cart-step1-item-sum">
            {{nf(item.count * item.price)}} ₽
          </div>
          <div class="cart-step1-item-delete"></div>
        </div>
      </div>

    </div>
    <div class="cart-step-block cart-step1-block2">
      <h2>Сумма</h2>

      <div class="cart-step1-sum">
        {{sum}}
      </div>
    </div>
  </div>
</template>

<script>
import { nf } from 'src/js/utils'
import CountUse from './Step/CountUse'

export default {
  name: 'Step1',
  components: { CountUse },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    nf
  }),
  computed: {
    sum () {
      let handler = (acc, current) => acc + current.count * current.price

      return nf(this.list.reduce(handler, 0)) + ' ₽'
    }
  }
}
</script>

<style lang="scss">
  .cart-step1 {
    display: flex;
    justify-content: stretch;

    &-block1 {
      width: 100%;
    }

    &-block2 {
      min-width: 340px;
    }

    &-list {
      width: 100%;
      margin-top: 30px;
    }

    &-item {
      margin-top: 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      position: relative;

      &-name {
        font-size: 20px;
        line-height: 19px;
      }

      &-count {
        margin-left: auto;
      }

      &-sum {
        width: 80px;
        margin-left: 30px;

        font-size: 20px;
        line-height: 26px;
      }

      &-delete {
        margin-left: 30px;
        width: 25px;
        height: 25px;

        background: transparent url($images + '/ico/close.svg') no-repeat center/contain;

        cursor: pointer;
        transition: 0.1s ease-out;

        &:hover {
          opacity: .7;
        }
      }

      & + &:after {
        content: '';
        position: absolute;
        bottom: calc(100% + 4px);
        left: 0;

        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #F1EFEF;
      }
    }
    &-sum {
      margin-top: 20px;

      font-size: 36px;
      line-height: 49px;
    }
  }
</style>
