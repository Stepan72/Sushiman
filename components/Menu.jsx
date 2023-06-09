"use client";

import React from "react";
import "../styles/sections/menu.scss";
import Card from "./Card";
import { useState } from "react";

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
              <img
                src={`/assets/sushi-${el.sushiNumber}.png`}
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
        <img src="/assets/arrow-right.svg" alt="arrow-right" />
      </button>
    </section>
  );
}

export default Menu;
