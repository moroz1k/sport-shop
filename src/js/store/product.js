// import _ from 'lodash'

import API from '../api'

import router from '../router'

export default {
  namespaced: true,

  state: {
    isLoad: false,
    isLoading: false,

    item: {}
  },
  actions: {
    fetchItem ({ commit }) {
      commit('setLoading', true)
      commit('setLoad', false)
      commit('setItem', {})

      API.fetchItem({ code: router.currentRoute.params.code })
        .then((data) => commit('setItem', data.item))
        .finally(() => {
          commit('setLoading', false)
          commit('setLoad', true)
        })
    }
  },
  mutations: {
    setItem (state, payload) {
      state.item = payload
    },
    setLoading (state, bool) {
      state.isLoading = bool
    },
    setLoad (state, bool) {
      state.isLoad = bool
    }
  },
  getters: {
    isLoad: (state) => state.isLoad,
    isLoading: (state) => state.isLoading,
    item: (state) => state.item
  }
}
