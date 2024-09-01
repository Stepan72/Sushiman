"use client";
import React from "react";
import "../styles/sections/about.scss";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Image from "next/image";

function About() {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us__image">
        <div className="about-us__image-sushi3">
          <motion.img
            src="/assets/sushi-3.png"
            alt="sushi3-image"
            variants={slideIn("left", "tween", 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
          />
        </div>
        <button className="about-us__button">
          Learn More
          <Image
            src="/assets/arrow-up-right.svg"
            width={12}
            height={12}
            alt="learn more"
          />
        </button>
        <div className="about-us__image-sushi2">
          <motion.img
            src="/assets/sushi-2.png"
            alt="sushi2-image"
            variants={slideIn("left", "tween", 0.1, 0.4)}
            initial="hidden"
            whileInView="show"
          />
        </div>
      </div>
      <motion.div
        className="about-us__content"
        variants={slideIn("right", "tween", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <p className="sushi__subtitle">About Us / 私たちに関しては</p>
        <h3 className="sushi__title">
          Our mission is to bring true Japanese flavours to you.
        </h3>
        <p className="sushi__description">
          We will continue to provide the experience of Omotenashi, the Japanese
          mindset of hospitality, with our shopping and dining for our
          customers.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
