import React from "react";
import "../styles/sections/menu.scss";

function Card() {
  return (
    <article className="popular-foods__card">
      <img
        className="popular-food__card-image"
        src="/assets/sushi-12.png"
        alt="sushi-12"
      />
    </article>
  );
}

export default Card;
