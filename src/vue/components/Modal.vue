<template>
  <transition name="fade">
    <div class="modal-wrap" @click.self="close" v-if="isOpen">
      <div class="modal">
        <slot :close="close"/>
        <div class="modal-close" @click="close"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { events } from '../../main'

export default {
  name: 'Modal',

  props: {
    name: String
  },

  data: () => ({
    isOpen: false
  }),

  mounted () {
    events.$on(`modal:${this.name}`, (payload) => this.open(payload))
    events.$on('modal:close', () => this.close())

    document.addEventListener('keydown', (e) => e.key === 'Escape' && this.close())
  },

  methods: {
    open (payload = null) {
      this.$emit('payload', payload)
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss">
  .modal {
    width: 100%;
    max-width: 500px;
    padding: 40px 20px;

    position: relative;

    text-align: center;

    border-radius: $border-radius;
    background: #FFFFFF;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.05);

    &-wrap {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      display: flex;
      align-items: center;
      justify-content: center;

      background: rgba(0, 0, 0, .2);
    }

    &-title {
      font-size: 36px;
      line-height: 37px;
    }

    &-subtitle {
      margin-top: 16px;

      font-size: 16px;
      line-height: 21px;
    }

    &-close {
      width: 25px;
      height: 25px;

      position: absolute;
      top: 20px;
      right: 20px;

      background: transparent url($images + '/ico/close.svg') no-repeat center/contain;

      cursor: pointer;
      transition: 0.1s ease-out;

      &:hover {
        opacity: .7;
      }
    }
  }
</style>
