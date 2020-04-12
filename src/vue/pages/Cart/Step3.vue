<template>
  <div class="cart-step3">
    <div class="cart-step-block cart-step3-block1">
      <h2>Проверка данных</h2>
      <div>
        Товары:
      </div>

      <div>
        Доставка:
      </div>

      <div>
        Контактные данные:
      </div>
    </div>
    <div class="cart-step-block cart-step3-block2">
      <h2>Итого</h2>

      <div>
        Товары:
      </div>

      <div>
        Доставка:
      </div>

      <div>
        Сумма:
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step3'
}
</script>

<style lang="scss">
  .cart-step3 {
    display: flex;

    &-block1 {
      width: 100%;
    }

    &-block2 {
      min-width: 340px;
    }
  }
</style>
