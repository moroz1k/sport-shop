<template>
  <div class="horizontal-items">
    <div class="horizontal-items-wrap container">
      <h2>
        {{title}}
      </h2>
      <div class="horizontal-items-slider">
        {{items.length === 0 ? 'Список пуст' : ''}}

        <transition name="fade">
          <swiper
            :options="options"
            :ref="`slider{_uid}`"
            v-if="isLoad"
          >
            <swiper-slide
              v-for="(chunk, index) in chunks"
              :key="`hp${index}`"
              class="horizontal-items-slide"
            >
              <ListItem
                v-for="item in chunk"
                :item="item"
                :key="`hpi${item.ID}`"
              />
            </swiper-slide>
          </swiper>
        </transition>
        <Indi
          v-if="!isLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import ListItem from '../pages/Shop/List/ListItem/ListItem'
import Indi from './Indicator'

export default {
  name: 'HorizontalItems',

  props: {
    title: String,
    items: Array,
    isLoad: {
      type: Boolean,
      default: true
    }
  },

  components: {
    Indi,
    ListItem
  },

  mounted () {
    this.id = this._uid
  },

  computed: {
    chunks () {
      return _.chunk(this.items, 4)
    }
  },

  data: () => ({
    id: null,

    options: {
      slidesPerView: 1,
      autoplay: {
        delay: 5000
      }
    }
  })
}
</script>

<style type="text/scss" lang="scss">
  .horizontal-items {
    margin-top: 60px;

    &-wrap {
    }

    &-slider {
      margin: 20px -10px 0;
    }

    &-slide {
      width: 100%;

      display: flex;

      box-sizing: border-box;
    }
  }
</style>
