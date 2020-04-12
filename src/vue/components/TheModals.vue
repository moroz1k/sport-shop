<template>
  <div class="modals">
    <Phone/>
    <AddToCart/>
    <addToFavorites/>
  </div>
</template>

<script>
import Phone from './TheModals/Phone'
import AddToCart from './TheModals/AddToCart'
import addToFavorites from './TheModals/addToFavorites'

export default {
  name: 'Modals',

  components: {
    addToFavorites,
    AddToCart,
    Phone
  }
}
</script>
