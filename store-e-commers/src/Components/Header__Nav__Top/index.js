import Header__Logo from '@components/Header__Logo'
import iconUser from '@icons/user.svg'
import iconBag from '@icons/bag.svg'
import iconMenu from '@icons/menu.svg'
import './index.scss'

const NavTop = () => {
  const view = `
  <nav class="nav__top">
    ${Header__Logo()}
    <div class="header__buttonlist">
      <a href="">
        <img src="${iconUser}" alt="iconUser" />
      </a>
      <a href="">
        <img src="${iconBag}" alt="iconBag" />
      </a>
      <a href="">
        <img src="${iconMenu}" alt="iconMenu" />
      </a>
    </div>
  </nav>
  `
  return view
}

export default NavTop
