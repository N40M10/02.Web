import React from "react";
import IconCart from '@icons/cart.svg'
import IconUser from '@icons/user.svg'
import './index.scss'

const Header__NavuserUI = () => {
  return (
    <>
      <nav className="header__navuser">
        <a href=""><img src={IconCart} alt="Cart Icon"/></a>
        <a href=""><img src={IconUser} alt="User Icon"/></a>
      </nav>
    </>
  )
}

export default Header__NavuserUI;
