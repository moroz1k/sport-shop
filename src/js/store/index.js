import Vue from 'vue'
import Vuex from 'vuex'

import shop from './shop'
import product from './product'
import common from './common'
import home from './home'
import blog from './blog'
import blogItem from './blogItem'
import news from './news'
import newsItem from './newsItem'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    shop,
    product,
    common,
    home,
    blog,
    blogItem,
    news,
    newsItem
  }
})
