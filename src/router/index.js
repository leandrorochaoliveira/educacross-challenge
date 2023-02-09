import Painel from '../pages/painel/Painel.vue';
import AlunosLista from '../pages/cadastros/alunos/lista/AlunosLista.vue'
import AlunosNovo from '../pages/cadastros/alunos/novo/AlunosNovo.vue'

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', component: Painel },
  { path: '/cadastros/alunos', component: AlunosLista },
  { path: '/cadastros/alunos/novo', component: AlunosNovo },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router