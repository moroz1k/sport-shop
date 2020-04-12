<template>
  <div class="home-advantages">
    <div class="home-advantages-wrap container">
      <div class="home-advantages-item" v-for="({title, ico}, key) in list" :key="`ai${key}`">
        <div class="home-advantages-item-ico">
          <img :src="ico" :alt="title">
        </div>
        <div class="home-advantages-item-title">{{title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import deliveryIco from '../../../assets/images/advantages/ico/delivery.svg'
import conserveIco from '../../../assets/images/advantages/ico/conserve.svg'
import rubleIco from '../../../assets/images/advantages/ico/ruble.svg'

export default {
  name: 'Advantages',

  data: () => ({
    list: [
      {
        title: 'Быстрая\nдоставка',
        ico: deliveryIco
      },
      {
        title: 'Большой\nассортимент',
        ico: conserveIco
      },
      {
        title: 'Бесплатная\nдоставка\nот 3 000 ₽',
        ico: rubleIco
      }
    ]
  })
}
</script>

<style type="text/scss" lang="scss">
  .home {
    &-advantages {
      margin-top: 60px;

      background-color: #F9F9F9;

      &-wrap {
        padding: 40px 20px;

        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      &-item {
        width: 220px;
        height: 220px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: white;
        border-radius: 50%;

        &-ico {
        }

        &-title {
          margin-top: 10px;

          text-align: center;
          white-space: pre-line;
          line-height: 21px;
        }
      }
    }
  }
</style>
