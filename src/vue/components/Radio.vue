<template>
  <div class="radio">
    <input type="radio" :id="id" :checked="val === value" :value="val" @input="onUpdate($event.target.value)">
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'Radio',

  props: {
    value: {},
    label: {
      default: ''
    },
    val: {}
  },

  data: () => ({
    id: ''
  }),

  mounted () {
    this.id = this._uid
  },

  methods: {
    onUpdate (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .radio {
    margin-top: 8px;

    cursor: pointer;

    input {
      display: none;

      &:checked + label {

        &:before {
          background: #F48221 url($images + '/ico/ok.svg') no-repeat center/12px;
          border: 2px solid #F48221;
        }
      }
    }

    label {
      display: flex;

      font-size: 14px;
      cursor: pointer;

      &:before {
        content: '';

        width: 20px;
        height: 20px;
        margin-top: -1px;
        margin-right: 8px;

        border: 1px solid #DDDDDD;
        border-radius: 3px;

        transition: 0.1s ease-out;
      }
    }
  }
</style>
