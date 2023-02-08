import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import store from './src/store'

const app = createApp(App)
app.use(store)
app.mount('#app')
