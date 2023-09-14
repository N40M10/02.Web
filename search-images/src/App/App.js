import Header from '@components/Header'
import Main from '@components/Main'
import Images from '@components/Images'
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

const App = () => {
    const app = document.querySelector('#app')
    app.innerHTML = ''

    const hash = getHash()
    const render = urls[hash] ? urls[hash] : Error404

    app.insertAdjacentHTML('beforeend', Header())
    app.insertAdjacentHTML('beforeend', render())
    app.insertAdjacentHTML('beforeend', Footer())

    Images()
}

export default App
