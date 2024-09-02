import React from "react";
import "../styles/sections/footer.scss";
import Image from "next/image";

const navData = [
  { href: "menu", title: "Menu" },
  { href: "food", title: "Food" },
  { href: "services", title: "Services" },
  { href: "about-us", title: "About Us" },
];

const socialFooter = [
  { title: "facebook", src: "/assets/facebook.svg" },
  { title: "instagram", src: "/assets/instagram.svg" },
  { title: "twitter", src: "/assets/twitter.svg" },
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
        {socialFooter.map((link) => (
          <li className="flex-center" key={link.title}>
            <Image width={21} height={21} src={link.src} alt={link.title} />
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
