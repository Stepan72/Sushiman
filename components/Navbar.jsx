import React from "react";
import Image from "next/image";
import "../styles/sections/navbar.css";

const navData = [
  { href: "menu", title: "Menu" },
  { href: "food", title: "Food" },
  { href: "services", title: "Services" },
  { href: "about-us", title: "About Us" },
];

function Navbar() {
  return (
    <header>
      <nav className="header__nav">
        <div className="header__logo">
          <h4>Sushiman</h4>
          <div className="header__logo-overlay"></div>
        </div>
        {/* DESKTOP */}
        <ul className="header__menu">
          {navData.map((el, index) => {
            return (
              <li key={index}>
                <a href={`#${el.href}`}>{el.title}</a>
              </li>
            );
          })}
          <li>
            <Image
              src="assets/search.svg"
              width={24}
              height={24}
              className="header__menu-search"
              alt="search"
            />
          </li>
        </ul>
        {/* MOBILE */}
        <ul className="header__menu-mobile">
          <li>
            <Image src="assets/menu.svg" alt="menu" width={24} height={24} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
