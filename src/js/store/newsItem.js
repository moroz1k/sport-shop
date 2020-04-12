import API from '../api'

import router from '../router'

const newsItem = {
  namespaced: true,

  state: {
    isLoad: false,
    isLoading: false,

    item: {}
  },
  actions: {
    fetchItem ({ commit }) {
      commit('setLoading', true)

      API.fetchNewsItem({ code: router.currentRoute.params.code })
        .then((data) => {
          commit('setItem', data.item)
          commit('setLoad', true)
        })
        .finally(() => {
          commit('setLoading', false)
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

export default newsItem
