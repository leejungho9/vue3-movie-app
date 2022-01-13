//페이지를 관리해주는 구성파일

import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'
export default createRouter({
    // History 모드는 따로 서버에 따로 셋팅해야 함
    // Hash : 페이지를 찾을 수 없다는 메세지 방지할 수 있음
    // https://google.com/#/search
    history : createWebHashHistory(),
    scrollBehavior() { //router에서 제공
        return {top: 0}
    },

    //page 구분해주는 개념
    routes : [
        {
            //https://google.com
            path : '/', //페이지를 구분해주는 경로 (어떤 vue.js의 component를 연결할건지)
            component : Home
        },
        {
            path : '/movie/:id',
            component : Movie
        },
        {
            path : '/about',
            component : About
        },
        {
            path : '/:pathMatch(.*)',
            component : NotFound
        }
        

    ]
})