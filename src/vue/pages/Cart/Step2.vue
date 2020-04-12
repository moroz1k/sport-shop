<template>
  <div class="cart-step2">
    <div class="cart-step-block cart-step2-block">
      <h2>Доставка</h2>
      <div class="cart-step2-delivery">
        <div class="cart-step2-title">Выберите доставку*:</div>
        <Radio
          v-model="test3"
          label="Самовывоз (бесплатно)"
          val="1"
        />
        <Radio
          v-model="test3"
          label="Курьером (от 200 ₽)"
          val="2"
        />
      </div>
      <div class="cart-step2-delivery">
        <div class="cart-step2-title">Выберите магазин для самовывоза*:</div>
        <Radio
          v-model="test4"
          label="Самовывоз (бесплатно)"
          val="1"
        />
        <Radio
          v-model="test4"
          label="Курьером (от 200 ₽)"
          val="2"
        />
      </div>

      <div class="cart-step2-delivery">
        <div class="cart-step2-title">Куда доставить*:</div>
        <input type="text" placeholder="Город*" v-model="contact.name">
        <input type="text" placeholder="Улица*" v-model="contact.name">
        <input type="text" placeholder="Дом*" v-model="contact.name">
        <input type="text" placeholder="Корпус" v-model="contact.name">
        <input type="text" placeholder="Квартира/Офис" v-model="contact.name">
      </div>
    </div>
    <div class="cart-step-block cart-step2-block">
      <h2>Контактные данные</h2>
      <div class="cart-step2-contact">
        <input type="text" placeholder="Ваше имя*" v-model="contact.name">
        <input type="text" placeholder="Номер телефона*" v-model="contact.phone">
        <input type="text" placeholder="E-mail" v-model="contact.email">
        <textarea type="text" placeholder="Примечание к заказу" v-model="contact.note"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from '../../components/Radio'

export default {
  name: 'Step2',

  components: { Radio },

  props: {
    contact: {
      type: Object
    }
  },

  watch: {
    contact: {
      handler (value) {
        this.contact_ = value
      },
      deep: true
    },
    contact_: {
      handler (value) {
        this.$emit('input', value)
      },
      deep: true
    }
  },

  data: () => ({
    test: true,
    test2: false,
    test3: '',
    test4: '',
    contact_: {}
  }),

  mounted () {
    this.contact_ = this.contact
  }
}
</script>

<style lang="scss">
  .cart-step2 {
    display: flex;

    &-block {
      width: 50%;
    }

    &-title {
      font-size: 20px;
      line-height: 26px;
    }

    &-delivery {
      margin-top: 16px;
    }

    &-contact {
      margin-top: 16px;
    }
  }
</style>
