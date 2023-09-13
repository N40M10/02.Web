import iconTruck from '@icons/truck.svg'
import iconCredit from '@icons/credit_card.svg'
import iconHeadset from '@icons/headset.svg'
import './index.scss'

const NavBottom = () => {
  const view = `
  <nav class="nav__bottom">
    <ul>
      <li>
        <img src="${iconTruck}" alt="icon truck" />
        <p>FREE SHIPPING</p>
      </li>
      <li>
        <img src="${iconCredit}" alt="icon credit card" />
        <p>100% MONEY BACK</p>
      </li>
      <li>
        <img src="${iconHeadset}" alt="icon headset" />
        <p>SUPPORT 24/7</p>
      </li>
    </ul>
  </nav>
  `
  return view
}

export default NavBottom
