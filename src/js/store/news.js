import _ from 'lodash'

import API from '../api'

import router from '../router'

const news = {
  namespaced: true,

  state: {
    isLoad: false,
    isLoading: false,

    list: [],

    perPage: 20,
    page: router.currentRoute.params.page || 1
  },
  actions: {
    fetchList ({ commit }) {
      commit('setLoading', true)

      API.fetchNews()
        .then((data) => commit('setList', data.list))
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
    setLoading (state, bool) {
      state.isLoading = bool
    },
    setLoad (state, bool) {
      state.isLoad = bool
    },
    setPage (state, page) {
      state.page = page
    }
  },
  getters: {
    isLoad: (state) => state.isLoad,
    isLoading: (state) => state.isLoading,
    list: (state) => state.list,
    perPage: (state) => state.perPage,
    page: (state) => state.page,
    paginationList: (state, getters) => {
      let list = getters.list
      let p = getters.pageRoot
      p--

      list = _.slice(list, p * state.perPage, getters.pageRoot * state.perPage)

      return list
    },
    count: (state) => state.list.length,
    pageRoot: (_, __, rootState) => rootState.route.params.page || 1
  }
}

export default news
