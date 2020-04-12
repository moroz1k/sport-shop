import API from '../api'

const common = {
  namespaced: true,
  state: {
    slides: [],
    sections: {}
  },
  actions: {
    fetch ({ commit }) {
      return API.fetchCommon()
        .then((result) => {
          if (result.slides) commit('setSlides', result.slides)
          if (result.sections) commit('setSections', result.sections)
        })
    }
  },
  mutations: {
    setSlides (state, payload) {
      state.slides = payload
    },
    setSections (state, payload) {
      state.sections = payload
    }
  },
  getters: {
    slides: ({ slides }) => slides,
    sections: ({ sections }) => sections
  }
}

export default common
