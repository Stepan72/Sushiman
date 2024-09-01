"use client";

import React from "react";
import "../styles/sections/menu.scss";
import Card from "./Card";
import { useState } from "react";
import Image from "next/image";

const buttonData = [
  { sushiNumber: 9, title: "Sushi" },
  { sushiNumber: 8, title: "Ramen" },
  { sushiNumber: 7, title: "Udon" },
  { sushiNumber: 6, title: "Danggo" },
];

const cardData = [
  {
    cardNumber: 12,
    cardTitle: "Chezu Sushi",
    cardPrice: 21,
    cardRating: 4.9,
  },
  {
    cardNumber: 11,
    cardTitle: "Original Sushi",
    cardPrice: 19,
    cardRating: 5.0,
  },
  {
    cardNumber: 10,
    cardTitle: "Ramen Legendo",
    cardPrice: 13,
    cardRating: 4.7,
  },
];

function Menu() {
  const [active, setActive] = useState(1);
  return (
    <section className="popular-foods" id="menu">
      <h2 className="popular-foods__title">Popular Food / 人気</h2>
      <div className="popular-foods__filters sushi__hide-scrollbar">
        <button className="popular-foods__filter-btn active">All</button>
        {buttonData.map((el, index) => {
          return (
            <button key={index} className="popular-foods__filter-btn ">
              <Image
                src={`/assets/sushi-${el.sushiNumber}.png`}
                width={36}
                height={36}
                alt={`sushi ${el.sushiNumber}`}
              />
              {el.title}
            </button>
          );
        })}
        <button className="popular-foods__filter-btn">Others</button>
      </div>
      <div className="popular-foods__catalogue">
        {cardData.map((el, index) => {
          return (
            <Card
              cardData={el}
              key={index}
              id={index}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </div>
      <button className="popular-foods__button">
        Explore Food
        <Image
          src="/assets/arrow-right.svg"
          height={14}
          width={14}
          alt="arrow-right"
        />
      </button>
    </section>
  );
}

export default Menu;
