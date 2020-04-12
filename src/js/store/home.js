// import _ from 'lodash'

import API from '../api'

export default {
  namespaced: true,

  state: {
    isLoad: false,
    isLoading: false,

    home: {}
  },
  actions: {
    fetch ({ commit }) {
      commit('setLoading', true)
      commit('setLoad', false)
      commit('setHome', {})

      API.fetchHome()
        .then((data) => commit('setHome', data.home))
        .finally(() => {
          commit('setLoading', false)
          commit('setLoad', true)
        })
    }
  },
  mutations: {
    setHome (state, payload) {
      state.home = payload
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
    home: (state) => state.home
  }
}
