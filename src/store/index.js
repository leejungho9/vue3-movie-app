//기본적인 store 구성

import {createStore} from 'vuex'
import movie from './movie'
import about from './about'

export default createStore ({
    modules : {
        movie,
        about
    }
})
