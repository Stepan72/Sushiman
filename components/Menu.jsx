import React from "react";
import "../styles/sections/menu.scss";
import Card from "./Card";

const buttonData = [
  { sushiNumber: 9, title: "Sushi" },
  { sushiNumber: 8, title: "Ramen" },
  { sushiNumber: 7, title: "Udon" },
  { sushiNumber: 6, title: "Danggo" },
];

function Menu() {
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
        <Card />
      </div>
      <button className="popular-foods__button">
        Explore Food
        <img src="/assets/arrow-right.svg" alt="arrow-right" />
      </button>
    </section>
  );
}

export default Menu;
