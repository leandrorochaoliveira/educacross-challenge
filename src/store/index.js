import { createStore, createLogger } from 'vuex'
import turmas from './modules/turmas'
import alunos from './modules/alunos'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})