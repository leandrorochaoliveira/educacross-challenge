import { fetchAllTurmas } from '../../services/turmas'

export default {
  state: () => ({
    all: []
  }),
  mutations: {
    setTurmas (state, turmas) {
      state.all = turmas
    },
  },
  actions: {
    async getAllTurmas ({ commit }) {
      const Turmas = await fetchAllTurmas()
      commit('setTurmas', Turmas)
    }
  },
  getters: {
   turmas: state => state.all
  }
}

