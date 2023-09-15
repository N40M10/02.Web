import Header from '@components/Header'
import Main from '@components/Main'
import Images from '@components/Images'
import Footer from '@components/Footer'
import Error404 from '@components/Error404'

import setContent from '@utils/setContent'
import getInput from '@utils/getInput'

import './reset.scss'
import './fonts.scss'
import './basicSet.scss'
import './App.scss'

const getHash = () => location.hash.replace('#', '/').toLocaleLowerCase() || '/'

const urls = {
    '/': Main,
    '/images': Main,
    '/videos': Main
}

const App = () => {
    const app = document.querySelector('#app')
    app.innerHTML = ''

    const hash = getHash()
    const render = urls[hash] ? urls[hash] : Error404

    app.insertAdjacentHTML('beforeend', Header())
    app.insertAdjacentHTML('beforeend', render())
    app.insertAdjacentHTML('beforeend', Footer())

    setContent()
    getInput()
}

export default App
