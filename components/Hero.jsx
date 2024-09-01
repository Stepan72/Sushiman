"use client";
import React from "react";
import "../styles/sections/hero.scss";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Image from "next/image";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <Image
          src="/assets/sushi-1.png"
          width={1833}
          height={1897}
          alt="sushi"
        />
        <h2>
          日 <br /> 本 <br /> 食
        </h2>
        <div className="hero-image__overlay"></div>
      </div>
      <motion.div
        className="hero-content"
        variants={slideIn("right", "tween", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <div className="hero-content-info">
          <h1>Feel the taste Japanese Food</h1>
          <p>Feel the taste Japanese Food from anywhere and anytime.</p>
          <div className="hero-content__buttons">
            <button className="hero-content__order-button">Order Now</button>
            <button className="hero-content__play-button">
              <Image
                src="/assets/play-circle.svg"
                width={46}
                height={46}
                alt="play"
              />
              How to Order
            </button>
          </div>
        </div>
        <div className="hero-content__testimonial">
          <div className="hero-content__customer flex-center">
            <h4>
              24<span>K+</span>
            </h4>
            <p>Happy Customers</p>
          </div>
          <div className="hero-content__review">
            <Image src="/assets/user.png" width={42} height={42} alt="user" />
            <p>
              "This is the best Japanese Food delivery service that ever
              existed."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
