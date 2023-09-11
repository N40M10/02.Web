import Header__Logo from '../Header__Logo'
import './index.scss'

const NavTop = () => {
  const view = `
  <nav class="nav__top">
    ${Header__Logo()}
    <div class="header__buttonlist">
      <a href="">
        <i class="">x</i>
      </a>
      <a href="">
        <i class="">x</i>
      </a>
      <a href="">
        <i class="">x</i>
      </a>
    </div>
  </nav>
  `
  return view
}

export default NavTop
