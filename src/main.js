import './assets/scss/main.scss'

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import router from './js/router'
import store from './js/store'
import App from './App.vue'
import './registerServiceWorker'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

sync(store, router)

Vue.use(VueAwesomeSwiper)

export const events = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
