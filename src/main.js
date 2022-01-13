import { createApp } from 'vue'
import App from './App.vue'
import loadImage from './plugins/loadImage'
import router from './routes/index.js'
import store from './store/index.js'
//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)


createApp(App)
.component('fa', FontAwesomeIcon)
.use(router) //use : 특정 플러그인을 연결할 때 사용
.use(store)
.use(loadImage)
.mount('#app')