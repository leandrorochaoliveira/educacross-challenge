import { createApp } from 'vue'
import App from './App.vue'
//import * as bootstrap from 'bootstrap'
import './scss/styles.scss'

import { plugin, defaultConfig } from '@formkit/vue'
import  formkitConfig from './config/formkit.config'

//import store from './store'
//createApp(App).use(store).mount('#app')

import router from './router'
createApp(App).use(router).use(plugin, defaultConfig(formkitConfig)).mount('#app')
