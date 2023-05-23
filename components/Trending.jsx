"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import "../styles/sections/trending.scss";
const sushiData = [
  { title: "Make Sushi" },
  { title: "Uramaki Sushi  " },
  { title: "Temaki Sushi" },
  { title: "Oshizushi" },
  { title: "Nigiri Sushi" },
  { title: "Inari Sushi" },
];

function Trending() {
  return (
    <>
      <section className="trending" id="food">
        <section className="trending-sushi">
          <motion.div
            className="trending__content"
            variants={slideIn("left", "tween", 0.1, 0.4)}
            initial="hidden"
            whileInView="show"
          >
            <p className="sushi__subtitle">What’s Trending / トレンド</p>
            <h3 className="sushi__title">Japanese Sushi</h3>
            <p className="sushi__description">
              Feel the taste of the most delicious Sushi here.
            </p>
            <ul className="trending__list flex-between">
              {sushiData.map((el, index) => {
                return (
                  <li key={index}>
                    <div className="trending__icon flex-center">
                      <img src="/assets/check.svg" alt="check" />
                    </div>
                    <p>{el.title}</p>
                  </li>
                );
              })}
            </ul>
          </motion.div>
          <div className="trending__image flex-center">
            <motion.img
              src="/assets/sushi-5.png"
              alt="sushi-5"
              variants={slideIn("right", "tween", 0.1, 0.4)}
              initial="hidden"
              whileInView="show"
            />
            <div className="trending__arrow trending__arrow-left">
              <img src="/assets/arrow-vertical.svg" alt="arrow vertical" />
            </div>
            <div className="trending__arrow trending__arrow-bottom">
              <img src="/assets/arrow-horizontal.svg" alt="arrow horizontal" />
            </div>
          </div>
        </section>
      </section>

      <div className="trending__discover">
        <p>Discover</p>
      </div>
    </>
  );
}

export default Trending;
