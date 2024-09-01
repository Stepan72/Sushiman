import React from "react";
import "../styles/sections/footer.scss";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const navData = [
  { href: "menu", title: "Menu" },
  { href: "food", title: "Food" },
  { href: "services", title: "Services" },
  { href: "about-us", title: "About Us" },
];

function Footer() {
  return (
    <footer className="footer flex-between">
      <h3 className="footer__logo">
        <span>Sushi</span>man
      </h3>
      <ul className="footer__nav">
        {navData.map((el, index) => {
          return (
            <li key={index}>
              <a href={`#${el.href}`}>{el.title}</a>
            </li>
          );
        })}
      </ul>

      <ul className="footer__social">
        <li className="flex-center">
          <img src="/assets/facebook.svg" alt="facebook" />
        </li>
        <li className="flex-center">
          <img src="/assets/instagram.svg" alt="instagram" />
        </li>
        <li className="flex-center">
          <img src="/assets/twitter.svg" alt="twitter" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
