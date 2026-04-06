import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vue3ConfirmDialog from 'vue3-confirm-dialog'


const pinia = createPinia()
const app = createApp(App)
app.use(Vue3ConfirmDialog)
app.use(router)
app.use(pinia)
app.mount('#app')
