"use client";
import React from "react";
import Image from "next/image";
import "../styles/sections/navbar.scss";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

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
          <motion.h4 variants={navVariants} initial="hidden" whileInView="show">
            Sushiman
          </motion.h4>
          <div className="header__logo-overlay"></div>
        </div>
        {/* DESKTOP */}
        <motion.ul
          className="header__menu"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
        >
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
        </motion.ul>
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
