import React from "react";
import Header__Navbar from '@components/Header__Navbar';
import Header__Navuser from '@components/Header__Navuser';
import IconMenu from '@icons/menu.svg';
import './index.scss'

const Header__NavMenuUI = () => {
    return (
      <>
        <nav className="header__navmenu">
          <div>
            <img src={IconMenu} alt="mobile button menu"/>
          </div>
          <Header__Navbar />
          <Header__Navuser />
        </nav>
      </>
    )
};

export default Header__NavMenuUI;
