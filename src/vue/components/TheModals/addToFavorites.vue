<template>
  <Modal :name="'addToFavorites'" @payload="setPayload">
    <div class="modal-add-to-cart" slot-scope="scope">
      <div class="modal-title">Товар добавлен!</div>
      <div class="modal-subtitle">Товар «{{payload}}»‎ был добавлен в <router-link to="/favorites" class="link" @click.native="scope.close">избранное</router-link></div>
    </div>
  </Modal>
</template>

<script>
import Modal from '../Modal'

export default {
  components: { Modal },

  data: () => ({
    payload: null
  }),

  methods: {
    setPayload (payload) {
      this.payload = payload
    }
  }
}
</script>

<style lang="scss">

</style>
