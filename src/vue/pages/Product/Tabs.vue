<template>
  <div class="product-tabs">
    <div class="product-tabs-btns">
      <div class="product-tabs-btns-wrap container">
        <div
          class="product-tabs-btns-item"
          :class="{active: current === 1}"
          @click="select(1)"
        >
          Состав
        </div>
        <div
          class="product-tabs-btns-item"
          :class="{active: current === 2}"
          @click="select(2)"
        >
          Свойства
        </div>
        <div
          class="product-tabs-btns-item"
          :class="{active: current === 3}"
          @click="select(3)"
        >
          Рекомендации
        </div>
        <div
          class="product-tabs-btns-item"
          :class="{active: current === 4}"
          @click="select(4)"
        >
          Отзывы ({{item.REVIEWS}})
        </div>
      </div>
    </div>
    <div class="product-tabs-content container">
      <div class="product-tabs-content-wrap">
        <div
          class="product-tabs-content-wrap-content"
          v-if="current === 1"
          :key="1"
        >
          <h2 class="product-tabs-content-title">
            Состав
          </h2>
          <div class="product-tabs-content-text" v-html="decodeHTMLEntities(item.PROPERTY_COMPOSITION_VALUE.TEXT)"></div>
        </div>
        <div
          class="product-tabs-content-wrap-content"
          v-if="current === 2"
          :key="2"
        >
          <h2 class="product-tabs-content-title">
            Свойства
          </h2>
          <div class="product-tabs-content-text" v-html="decodeHTMLEntities(item.PROPERTY_PROPERTIES_VALUE.TEXT)"></div>
        </div>
        <div
          class="product-tabs-content-wrap-content"
          v-if="current === 3"
          :key="3"
        >
          <h2 class="product-tabs-content-title">
            Рекомендации
          </h2>
          <div class="product-tabs-content-text" v-html="decodeHTMLEntities(item.PROPERTY_APPLICATION_VALUE.TEXT)"></div>
        </div>
        <div
          class="product-tabs-content-wrap-content"
          v-if="current === 4"
          :key="4"
        >
          <h2 class="product-tabs-content-title">
            Отзывы
          </h2>
          <div class="product-tabs-content-text">
            {{(+item.REVIEWS === 0) ? 'Нет отзывов' : ''}}

            <Reviews
              :item="item"
              v-if="(+item.REVIEWS !== 0)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reviews from './Reviews'

export default {
  name: 'Tabs',

  components: { Reviews },

  props: {
    item: Object
  },

  data: () => ({
    current: 1
  }),

  methods: {
    select (index) {
      this.current = index
    },
    decodeHTMLEntities (text) {
      if (typeof text === 'undefined') return ''
      const textArea = document.createElement('textarea')
      textArea.innerHTML = text
      return textArea.value
    }
  }
}
</script>

<style lang="scss">
  .product-tabs {
    margin-top: 60px;

    &-btns {
      background-color: #F9F9F9;

      &-wrap {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      &-item {
        width: calc((100% - 60px) / 4);
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        text-transform: uppercase;

        border-bottom: 2px solid transparent;

        transition: 0.2s ease-out;
        cursor: pointer;

        &:hover {
          border-bottom-color: rgba(#F48221, .7);
        }

        &.active {
          border-bottom-color: #F48221;
        }

        & + & {
          margin-left: 20px;
        }
      }
    }

    &-content {
      margin-top: 20px;

      &-wrap {
        padding: 20px;

        border: 1px solid #F4F3F3;
        border-radius: 3px;
      }

      &-title {

      }

      &-text {
        margin-top: 20px;
        /*white-space: pre-line;*/
      }
    }
  }
</style>
