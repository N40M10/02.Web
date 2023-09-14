const myApiKey = process.env.API_KEY
const myApiLink = process.env.API_LINK

const myKeyWord = 'Linux'

const mySearch = `&q=${myKeyWord}`
const myConf = '&image_type=photo&pretty=true'
const myPage = '&page=1&per_page=8'
const isApi = `${myApiLink}/?key=${myApiKey}${mySearch}${myConf}${myPage}`

const getData = await fetch(isApi)
    .then(response => response.json())
    .catch(error => error)
    .finally(() => 'Request ends')

export default getData

//const getData = await fetch(isApi)
//    .then(response => response.json())
//    .catch(error => console.log(error))
//    .finally(() => console.log('Request ends'))
//
//const getData = async (urlApi = isApi) => {
//    try {
//        const response = await fetch(urlApi)
//        const data = await response.json()
//        console.log(data)
//        return data
//    } catch (error) {
//        return error
//    } finally {
//        console.log("finally")
//    }
//}
