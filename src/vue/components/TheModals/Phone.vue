<template>
  <Modal :name="'phone'">
    <div class="modal-phone">
      <div class="modal-title">
        Заказать звонок
      </div>
      <div class="modal-subtitle">
        Оставьте свой номер телефона и мы перезвоним Вам!
      </div>
      <form class="modal-phone-form">
        <input type="text" placeholder="Имя">
        <input type="text" placeholder="Телефон" required>
        <button class="btn">Отправить</button>
      </form>
    </div>
  </Modal>
</template>

<script>
import Modal from '../Modal'

export default {
  components: {
    Modal
  }
}
</script>

<style lang="scss">
  .modal {

    &-phone {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &-form {
        width: 100%;
        padding: 15px 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
  }
</style>
