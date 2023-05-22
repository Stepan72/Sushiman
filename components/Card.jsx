"use client";

import "../styles/sections/menu.scss";

function Card({ cardData, active, setActive, id }) {
  console.log(active);

  return (
    <>
      <article
        className={`popular-foods__card ${active === id ? "active-card" : ""}`}
        onPointerEnter={() => {
          setActive(id);
        }}
      >
        <img
          className="popular-food__card-image"
          src={`/assets/sushi-${cardData.cardNumber}.png`}
          alt={`sushi-${cardData.cardNumber}`}
        />
        <h4 className="popular-food__card-title">{cardData.cardTitle}</h4>
        <div className="popular-food__card-details flex-between ">
          <div className="popular-food__card-rating">
            <img src="/assets/star.svg" alt="star" />
            <p>{`${cardData.cardRating.toFixed(1)}`}</p>
          </div>
          <p className="popular-food__card-price ">{`$${cardData.cardPrice.toFixed(
            2
          )}`}</p>
        </div>
      </article>
    </>
  );
}

export default Card;
