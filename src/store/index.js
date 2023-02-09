import { createStore, createLogger } from 'vuex'
import turmas from './modules/turmas'
import alunos from './modules/alunos'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    turmas,
    alunos
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store