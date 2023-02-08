import Painel from '../pages/painel/Painel.vue';
import AlunosList from '../pages/cadastros/alunos/AlunosList.vue'

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', component: Painel },
  { path: '/cadastros/alunos', component: AlunosList },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router