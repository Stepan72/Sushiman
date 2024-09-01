"use client";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import "../styles/sections/menu.scss";
import Image from "next/image";

function Card({ cardData, active, setActive, id }) {
  //   console.log(active);

  return (
    <>
      <motion.article
        variants={slideIn("down", "tween", 0.1, 0.4)}
        initial="hidden"
        whileInView="show"
        className={`popular-foods__card ${active === id ? "active-card" : ""}`}
        onPointerEnter={() => {
          setActive(id);
        }}
      >
        <Image
          className="popular-food__card-image"
          src={`/assets/sushi-${cardData.cardNumber}.png`}
          alt={`sushi-${cardData.cardNumber}`}
          width={110}
          height={84}
        />
        <h4 className="popular-food__card-title">{cardData.cardTitle}</h4>
        <div className="popular-food__card-details flex-between ">
          <div className="popular-food__card-rating">
            <Image src="/assets/star.svg" width={24} height={24} alt="star" />
            <p>{`${cardData.cardRating.toFixed(1)}`}</p>
          </div>
          <p className="popular-food__card-price ">{`$${cardData.cardPrice.toFixed(
            2
          )}`}</p>
        </div>
      </motion.article>
    </>
  );
}

export default Card;
