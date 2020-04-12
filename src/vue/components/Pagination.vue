<template>
  <div class="pagination container">
    <div
      class="pagination-prev"
      :class="{disabled: +page === 1}"
      @click="prev">
      <img :src="prevIco" alt="">
    </div>
    <div class="pagination-page"
         :class="{active: page === pkey}"
         v-for="(pkey, key) in pages"
         @click="setPage(pkey)"
         :key="`pp${key}`">
      {{pkey}}
    </div>
    <div
      class="pagination-next"
      :class="{disabled: +pages.length === +page}"
      @click="next">
      <img :src="nextIco" alt="">
    </div>
  </div>
</template>

<script>
import prevIco from '../../assets/images/pagination/ico/prev.svg'
import nextIco from '../../assets/images/pagination/ico/next.svg'

export default {
  name: 'Pagination',

  props: [
    'page',
    'perPage',
    'count'
  ],

  data: () => ({
    prevIco,
    nextIco
  }),

  computed: {
    pages () {
      return Array.from(Array(Math.ceil(this.count / this.perPage)), (x, index) => index + 1)
    }
  },

  methods: {
    setPage (page) {
      this.$emit('set-page', page)
    },
    prev () {
      if (+this.page !== 1) {
        let p = this.page
        p--
        this.$emit('set-page', p)
      }
    },
    next () {
      if (this.pages.length !== +this.page) {
        let p = this.page
        p++
        this.$emit('set-page', p)
      }
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .pagination {
    margin-top: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    %style-btn {
      height: 50px;
      padding: 0 28px;
      margin-bottom: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid #F4F3F3;
      border-radius: $border-radius;

      transition: 0.1s ease-out;
      cursor: pointer;

      &:hover {
        border-color: $color-main;
      }

      &.disabled {
        background-color: rgba(0, 0, 0, .02);
        opacity: .5;
        pointer-events: none;
      }
    }

    &-prev {
      margin-right: 5px;

      @extend %style-btn;
    }

    &-page {
      margin: 0 5px;

      font-size: 24px;
      line-height: 31px;

      @extend %style-btn;

      &.active {
        border-color: $color-main;
      }
    }

    &-next {
      margin-left: 5px;

      @extend %style-btn;
    }
  }
</style>
