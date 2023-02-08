import fetchAllTurmas from '../../services/turmas'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {
   turmas: state => state.all
}

// actions
const actions = {
  async getAllTurmas ({ commit }) {
    const Turmas = await fetchAllTurmas()
    commit('setTurmas', Turmas)
  }
}

// mutations
const mutations = {
  setTurmas (state, turmas) {
    state.all = turmas
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}