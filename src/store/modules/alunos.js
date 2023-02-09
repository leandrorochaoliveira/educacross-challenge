
export default {
  state: () => ({
    all: []
  }),
  mutations: {
    setAlunos (state, alunos) {
      state.all = alunos
    },
  },
  actions: {

  },
  getters: {
   alunos: state => state.all
}
}

const state = () => ({
  all: []
})

