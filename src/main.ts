import { createApp } from 'vue'
import App from './App.vue'
//import * as bootstrap from 'bootstrap'
import './scss/styles.scss'

import { plugin, defaultConfig } from '@formkit/vue'
import  formkitConfig from './config/formkit.config'

import store from './store'

import router from './router'
createApp(App).use(store).use(router).use(plugin, defaultConfig(formkitConfig)).mount('#app')
