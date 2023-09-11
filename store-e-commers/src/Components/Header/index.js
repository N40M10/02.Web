import Header__Nav from '../Header__Nav'
import './index.scss'

const Header = () => {
    const header = `
    <header class="header">
        ${Header__Nav()}
    </header>
    `
    return header
}

export default Header
