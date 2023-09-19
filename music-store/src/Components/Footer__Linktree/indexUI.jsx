import React from "react";

import IconLine from '@icons/line.svg'

import './index.scss'

const Footer__LinktreeUI = () => {
    return (
        <>
            <nav className="footer__linktree">
                <nav>
                    <span><img src={IconLine} alt="icon line"/></span>
                    <a href=""><strong>My Account</strong></a>
                    <a href="">Overview</a>
                    <a href="">Order History</a>
                    <a href="">Wishlist</a>
                    <a href="">Acount information</a>
                </nav>
            </nav>
        </>
    );
};

export default Footer__LinktreeUI;
