import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { formatDate } from '@/utils/filters'

const app = createApp(App)

app.use(store).use(router).mount('#app')

app.config.globalProperties.$formatDate = formatDate

