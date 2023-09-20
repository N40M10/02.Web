import React from "react";
import CentralMusicLogo from '@icons/centralmusiclogo.svg'
import './index.scss'

const Header__LogoUI = () => {
    return (
      <>
        <nav className="header__logo">
          <a href=""><img src={CentralMusicLogo} alt="central music logo"/></a>
        </nav>
      </>
    )
};

export default Header__LogoUI;
