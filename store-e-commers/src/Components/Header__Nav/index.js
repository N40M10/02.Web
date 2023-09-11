import Nav__Top from '../Header__Nav__Top'
import './index.scss'

const Nav = () => {
  const view = `
  <nav class="header__nav">
    ${Nav__Top()}
  </nav>
  `
  return view
}

export default Nav
