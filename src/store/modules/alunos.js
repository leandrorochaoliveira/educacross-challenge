
// initial state
const state = () => ({
  all: []
})

// getters
const getters = {
   alunos: state => state.all
}

// actions
const actions = {
  // async getAllAlunos ({ commit }) {
  //   const Alunos = await fetchAllAlunos()
  //   commit('setAlunos', Alunos)
  // }
}

// mutations
const mutations = {
  setAlunos (state, alunos) {
    state.all = alunos
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}