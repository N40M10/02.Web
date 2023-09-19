import React from "react";
import Footer__Linktree from "@components/Footer__Linktree";
import Footer__Logo from '@components/Footer__Logo'
import Footer__Rights from "@components/Footer__Rights"

import './index.scss'

const FooterUI = () => {
    return (
      <>
        <footer className="footer">
          <Footer__Linktree />
          <Footer__Logo />
          <Footer__Rights />
        </footer>
      </>
    );
};

export default FooterUI;
