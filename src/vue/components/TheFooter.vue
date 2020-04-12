<template>
  <div class="footer">
    <div class="footer-wrap container">
      <div class="footer-col footer-cop">
        © {{(new Date()).getFullYear()}} РЭМ СПОРТ<br>
        Магазин спортивного питания<br>
        и спортивных товаров
      </div>
      <div class="footer-col footer-menu">
        <router-link to="/pages/gift-cards.html">Подарочные карты</router-link><br>
        <router-link to="/pages/about-company.html">О компании</router-link><br>
        <router-link to="/blog">Статьи</router-link>
        <br>
        <router-link to="/news">Новости</router-link>
        <br>
        <router-link to="/pages/shops.html">Магазины</router-link><br>
        <router-link to="/pages/delivery.html">Доставка</router-link><br>
        <router-link to="/pages/discounts.html">Скидки</router-link>
      </div>
      <div class="footer-col footer-menu">
        <router-link to="/pages/politics.html">Политика конфиденциальности</router-link><br>
        <router-link to="/pages/personal-data.html">Обработка персональных данных</router-link><br>
        <router-link to="/pages/public-offer.html">Публичная оферта</router-link>
      </div>
      <div class="footer-col footer-info">
        <div class="footer-phone">
          +7 812 579 0090<br>
          +7 931 530 0282
        </div>
        <div class="footer-soc">
          <a href="https://vk.com/rem_sport" class="footer-soc-vk" target="_blank"></a>
          <a href="https://www.facebook.com/remsportspb/" class="footer-soc-fb" target="_blank"></a>
          <a href="https://www.instagram.com/rem_sport_official" class="footer-soc-insta" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style type="text/scss" lang="scss">
  .footer {
    background-color: #D6D6D6;

    &-wrap {
      padding: 20px;

      display: flex;
    }

    &-col {
      width: calc(100% / 4);
      padding: 0 20px;
    }

    &-cop {
      font-size: 14px;
      line-height: 18px;
    }

    &-menu {
      font-size: 14px;
      line-height: 21px;
    }

    &-phone {
      font-size: 14px;
      line-height: 14px;

      padding-left: 40px;
      background: transparent url($images + '/ico/phone-grey.svg') no-repeat left/25px;
    }

    &-soc {
      width: 142px;
      margin-top: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &-vk {
        width: 30px;
        height: 30px;

        background: transparent url($images + '/ico/VK.svg') no-repeat center/30px;
      }

      &-fb {
        width: 30px;
        height: 30px;

        background: transparent url($images + '/ico/FB.svg') no-repeat center/30px;
      }

      &-insta {
        width: 30px;
        height: 30px;

        background: transparent url($images + '/ico/IM.svg') no-repeat center/30px;
      }
    }
  }
</style>
