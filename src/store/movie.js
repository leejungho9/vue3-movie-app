//영화 관련 데이터 취급

import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'
export default {
    // module
    namespaced : true,
    // data 
    stats: () => ({
        movies : [],
        message : '',
        loading : false
    }),
    // computed
    getters: {},
    // methods
    // 변이
    mutations : { // (변경시켜주는 정도의 메소드만 정의) 특정 데이터를 직접 수정하는 건 x 밑에 actions에 작성 
        updateState(state, payload) {
             //['movies', 'message' , 'loading' ...]
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies (state) {
         state.movies = []
        }
    },
    //비동기
    actions : { 
        async searchMovies ({state, commit }, payload) {
            
            try{
                const res = await _fetchMovie({
                    ...payload,
                    page :1
                })
                const { Search, totalResults } = res.data
                commit ('updateState',{
                    movies : _uniqBy(Search, 'imdbID')
                })
                console.log(totalResults) //301 => 31
                console.log(typeof totalResults) //String
    
                const total = parseInt(totalResults, 10) //형변환
                const pageLength = Math.ceil(total / 10) //ceil : 올림처리
                
                //추가 요청
                if(pageLength > 1 ) {
                    for(let page = 2; page <= pageLength; page += 1) {
                        if(page > payload.number / 10) {
                            break
                        }
                        const res = await _fetchMovie({
                            ...payload,
                            page
                        })
                        const { Search } = res.data
                        commit ('updateState',{
                            movies : [
                                ...state.movies, 
                                ..._uniqBy(Search, 'imdbID')
                            ] //전개연산자
                        })
                    }
                }     
            }catch (message) {
                commit('updateState',{
                    movies : [],
                    message
                })
            } 
        }
    }
}

function _fetchMovie(payload) { //현재파일 내부에서만 실행
    const {title, type, year, page} = payload
    const KEY ='7035c60c'
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
    
    return  new Promise(function(resolve, reject ) {
        axios.get(url)
        .then(res => {
            console.log(res)
            if(res.data.Error) {
                reject(res.data.Error)
            }
            resolve(res)
        })
        .catch( err => {
            reject(err.message)
        })
    })
}