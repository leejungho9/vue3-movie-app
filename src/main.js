import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'

createApp(App)
    .use(router) //use : 특정 플러그인을 연결할 때 사용
    .mount('#app')