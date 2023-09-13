import Footer__Logo from '../Footer__Logo'
import Footer__Contact from '../Footer__Contact'
import Footer__TreeLink from '../Footer__TreeLink'
import Footer__TreeSocial from '../Footer__TreeSocial'
import Footer__TreeLinkAll from '../Footer__TreeLinkAll'
import Footer__Entries from '../Footer__Entries'
import Footer__Rights from '../Footer__Rights'

import './index.scss'

const Footer = () => {
    const footer = `
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__right">
                ${Footer__Logo()}
                ${Footer__Contact()}
                ${Footer__TreeLink()}
                ${Footer__TreeSocial()}
            </div>
            <div class="footer__middle">
                ${Footer__TreeLinkAll()}
            </div>
            <div class="footer__left">
                ${Footer__Entries()}
            </div>
        </div>
        ${Footer__Rights()}
    </footer>
    `
    return footer
}

export default Footer
