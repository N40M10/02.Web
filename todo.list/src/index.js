import Template from './Layout/index.js'
import './index.scss'

(function App() {
    const main = null || document.getElementById('main')
    main.innerHTML = Template()
})()
