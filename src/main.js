import { createApp } from 'vue'
import App from './App.vue'

import 'aos/dist/aos.css'
import './assets/main.css'

import AOS from 'aos'

const app = createApp(App)
app.mount('#app')

AOS.init({
  once: true,
  offset: 50,
  duration: 800
})
