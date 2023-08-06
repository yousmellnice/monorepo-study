import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { formatNum } from '@packages/utils';

console.log(formatNum(100));

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
