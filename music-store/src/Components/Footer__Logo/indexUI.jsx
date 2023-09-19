import React from "react";

import IconYoutube from '@icons/youtube.svg'
import IconTwitter from '@icons/twitter.svg'
import IconInstagram from '@icons/instagram.svg'
import IconFacebook from '@icons/facebook.svg'

import './index.scss'

const FooterUI = () => {
    return (
      <>
        <nav className="footer__logo">
          <nav>
            <a href=""><img src={IconYoutube} alt=""/></a>
            <a href=""><img src={IconTwitter} alt=""/></a>
            <a href=""><img src={IconInstagram} alt=""/></a>
            <a href=""><img src={IconFacebook} alt=""/></a>
          </nav>
        </nav>
      </>
    );
};

export default FooterUI;
