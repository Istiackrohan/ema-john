import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="https://github.com/Istiackrohan/ema-john-simple/blob/main/src/images/logo.png?raw=true" alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    )
}

export default Header
