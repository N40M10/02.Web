import Header from '@components/Header'
import Footer from '@components/Footer'
import Main from '@components/Main'
import Category from '@components/Main__Category'
import Product from '@components/Main__Product'
import Cart from '@components/Main__Cart'
import Error404 from '@components/Error404'

import './reset.scss'
import './fonts.scss'
import './basicSet.scss'
import './App.scss'

const getHash = () => location.hash.replace('#', '/').toLocaleLowerCase() || '/'

const urls = {
    '/': Main,
    '/category': Category,
    '/product': Product,
    '/cart': Cart
}

const App = () => {
    const app = document.querySelector('#app')
    app.innerHTML = ''

    const hash = getHash()
    const render = urls[hash] ? urls[hash] : Error404

    app.insertAdjacentHTML('beforeend', Header())
    app.insertAdjacentHTML('beforeend', render())
    app.insertAdjacentHTML('beforeend', Footer())
}

export default App

//const getHash = () => location.hash.replace('#', '/').toLocaleLowerCase() || '/'
//
//const resolveRoute = (route) => {
//    route === '/'
//        ? route = '/'
//        : route = route
//    return route
//}
//
//const urls = {
//    '/': Home,
//    '/category': Category,
//    '/product': Product,
//    '/cart': Cart
//}
//
//const App = () => {
//    const app = document.querySelector('#app')
//    app.innerHTML = ''
//
//    const hash = getHash()
//    const route = resolveRoute(hash)
//    const render = urls[route] ? urls[route] : Error404
//
//    app.insertAdjacentHTML('beforeend', Header())
//    app.insertAdjacentHTML('beforeend', render())
//    app.insertAdjacentHTML('beforeend', Footer())
//    console.log(typeof getHash())
//}
//
//
//const getHash = () => location.hash.replace('#', '/').toLocaleLowerCase() || '/'
//
//const urls = {
//    '/': Home,
//    '/category': Category,
//    '/product': Product,
//    '/cart': Cart
//}
//
//const App = () => {
//    const app = document.querySelector('#app')
//    app.innerHTML = ''
//
//    const hash = getHash()
//    const render = urls[hash] ? urls[hash] : Error404
//
//    app.insertAdjacentHTML('beforeend', Header())
//    app.insertAdjacentHTML('beforeend', render())
//    app.insertAdjacentHTML('beforeend', Footer())
//    console.log(typeof getHash())
//}
//
//const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[0] || '/'
//
//const renderResolve = (route) => {
//    let resolve
//    switch (route) {
//        case '/':
//            resolve = Home
//            break;
//        case 'category':
//            resolve = Category
//            break;
//        case 'product':
//            resolve = Product
//            break;
//        case 'cart':
//            resolve = Cart
//            break;
//
//        default:
//            resolve = Error404
//            break;
//    }
//    return resolve
//}
//
//const App = () => {
//    const app = document.querySelector('#app')
//    app.innerHTML = ''
//
//    const hash = getHash()
//    const render = renderResolve(hash)
//
//    app.insertAdjacentHTML('beforeend', Header())
//    app.insertAdjacentHTML('beforeend', render())
//    app.insertAdjacentHTML('beforeend', Footer())
//}
