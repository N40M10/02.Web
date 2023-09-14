import Header from '@components/Header'
import Main from '@components/Main'
import Footer from '@components/Footer'
import Error404 from '@components/Error404'

import './reset.scss'
import './fonts.scss'
import './basicSet.scss'
import './App.scss'

const getHash = () => location.hash.replace('#', '/').toLocaleLowerCase() || '/'

const urls = {
    '/': Main
}

const returnHome = () => {
    const view = `
        <a href="/" class="returnHome">
            Regresar a Home
        </a>
    `
    return view
}

const App = () => {
    const app = document.querySelector('#app')
    app.innerHTML = ''

    const hash = getHash()
    const renderHeader = urls[hash] ? Header() : returnHome()
    const render = urls[hash] ? urls[hash] : Error404

    app.insertAdjacentHTML('beforeend', renderHeader)
    app.insertAdjacentHTML('beforeend', render())
    app.insertAdjacentHTML('beforeend', Footer())
}

export default App
