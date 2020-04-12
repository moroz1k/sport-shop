import _ from 'lodash'

import API from '../api'

import router from '../router'

export const VIEWS = [
  { name: 'Плитки', id: 'plates' },
  { name: 'Список', id: 'lines' }
]

export const SORTS = [
  { name: 'Наименованию', id: 'NAME' },
  { name: 'Цене', id: 'PRICE' },
  { name: 'Новизне', id: 'ID' },
  { name: 'Цена за порцию', id: 'PROPERTY_PRICEPORTION_VALUE' }
]

const shop = {
  namespaced: true,

  state: {
    isLoad: false,
    isLoading: false,

    list: [],
    sections: [],
    category: {},
    mainCategory: {},

    sort: {
      current: '',
      list: SORTS
    },

    view: {
      current: 'plates',
      list: VIEWS
    },

    perPage: 20,
    page: router.currentRoute.params.page || 1
  },
  actions: {
    fetchList ({ commit }, { params } = { params: {} }) {
      commit('setLoading', true)

      API.fetchShop({ params })
        .then(({ list, sections, category, mainCategory }) => {
          commit('setList', list)
          commit('setCategory', category || {})
          commit('setMainCategory', mainCategory || {})
          commit('setSections', sections)
        })
        .finally(() => {
          commit('setLoading', false)
          commit('setLoad', true)
        })
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    setSections (state, payload) {
      state.sections = payload
    },
    setCategory (state, payload) {
      state.category = payload
    },
    setMainCategory (state, payload) {
      state.mainCategory = payload
    },
    setLoading (state, bool) {
      state.isLoading = bool
    },
    setLoad (state, bool) {
      state.isLoad = bool
    },
    setPage (state, page) {
      state.page = page
    },
    setSort (state, item) {
      let obj = { ...item }

      if (state.sort.current.mod === 'asc' && state.sort.current.id === item.id) {
        obj.mod = 'desc'
      } else if (state.sort.current.mod === 'desc' && state.sort.current.id === item.id) {
        obj = { var: '', name: '', mod: '' }
      } else {
        obj.mod = 'asc'
      }

      state.sort.current = obj
    }
  },
  getters: {
    isLoad: (state) => state.isLoad,
    isLoading: (state) => state.isLoading,
    list: (state) => state.list,
    perPage: (state) => state.perPage,
    page: (state) => state.page,
    sort: ({ sort }) => sort,
    view: ({ view }) => view,
    sections: ({ sections }) => sections,
    category: ({ category }) => category,
    mainCategory: ({ mainCategory }) => mainCategory,
    sortedList: (state, getters) => {
      let list = [...getters.list]

      if (getters.sort.current) {
        list = _.orderBy(list, [
          (product) => !!product[getters.sort.current.id],
          (product) => typeof product[getters.sort.current.id] === 'string' ? product[getters.sort.current.id].toLowerCase() : product[getters.sort.current.id]
        ], [
          'desc',
          getters.sort.current.mod
        ])
      }

      return list
    },
    paginationList: (state, getters) => {
      let list = getters.sortedList
      let p = getters.pageRoot
      p--

      list = _.slice(list, p * state.perPage, getters.pageRoot * state.perPage)

      return list
    },
    count: (state) => state.list.length,
    pageRoot: (_, __, rootState) => rootState.route.params.page || 1
  }
}

export default shop
