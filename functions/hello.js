exports.hadler = async function ( evnet, context) {
    return {

        statusCode : 200,
        body : JSON.stringify({//객체데이터를 문자로 변환해 할당
            name : 'jung',
            age : 23,
            email : '9wjdgh9@naver.com'
        })
    }
}