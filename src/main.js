import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
//import store from './store' index란 이름의 자바스크립트 파일은 생략 가능(기본)

createApp(App)
    .use(router) //use : 특정 플러그인을 연결할 때 사용
    .use(store)
    .mount('#app')