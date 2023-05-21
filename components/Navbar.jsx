import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="header__nav">
        <div className="header__logo">
          <h4>Sushiman</h4>
          <div className="header__logo-overlay"></div>
        </div>
        <ul className="header__menu">
          <li>
            <a href="#menu">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
