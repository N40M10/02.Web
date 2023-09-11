import Footer__Logo from '../Footer__Logo'
import Footer__Contact from '../Footer__Contact'
import Footer__TreeLink from '../Footer__TreeLink'
import Footer__TreeSocial from '../Footer__TreeSocial'
import Footer__Rights from '../Footer__Rights'

import './index.scss'

const Footer = () => {
    const footer = `
    <footer class="footer">
        ${Footer__Logo()}
        ${Footer__Contact()}
        ${Footer__TreeLink()}
        ${Footer__TreeSocial()}
        ${Footer__Rights()}
    </footer>
    `
    return footer
}

export default Footer
