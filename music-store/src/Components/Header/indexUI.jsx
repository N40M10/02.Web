import React from "react";
import Header__Logo from "@components/Header__Logo";
import Header__NavMenu from "../Header__NavMenu";
import './index.scss'

const HeaderUI = () => {
    return (
      <>
        <header className="header">
          <Header__Logo />
          <Header__NavMenu />
        </header>
      </>
    )
};

export default HeaderUI;
