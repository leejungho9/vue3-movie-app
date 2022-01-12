
export default {
    install(app) { //매개변수로 현재 프로젝트에 해당하는 객체데이터를 내려줌
        app.config.globalProperties.$loadImage = (src) => {
            return new Promise((resolve)=> {
                    const img = document.createElement('img')
                    img.src = src
                    img.addEventListener('load', () => {
                    //완료

                    resolve()
                 })
            })
        }
    }
}