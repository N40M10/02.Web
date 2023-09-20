import React from "react";

import CentalMusicLogo from '@icons/centralmusiclogo.svg'
import IconYoutube from '@icons/youtube.svg'
import IconTwitter from '@icons/twitter.svg'
import IconInstagram from '@icons/instagram.svg'
import IconFacebook from '@icons/facebook.svg'

import './index.scss'

const FooterUI = () => {
    return (
      <>
        <nav className="footer__logo">
          <a href=""><img src={CentalMusicLogo} alt="Central Music Logo"/></a>
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
