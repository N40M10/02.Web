import Nav__Top from '../Header__Nav__Top'
import Nav__Middle from '../Header__Nav__Middle'
import Nav__Bottom from '../Header__Nav__Bottom'
import './index.scss'

const Nav = () => {
  const view = `
  <nav class="header__nav">
    ${Nav__Top()}
    ${Nav__Middle()}
    ${Nav__Bottom()}
  </nav>
  `
  return view
}

export default Nav
