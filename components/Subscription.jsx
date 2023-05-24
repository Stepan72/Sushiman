"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import "../styles/sections/subscribe.scss";

function Subscription() {
  return (
    <section className="subscription flex-center" id="services">
      <motion.div
        variants={slideIn("up", "tween", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <h2>
          Get offers stright <br /> to your inbox
        </h2>
        <p>Sign up for the Sushiman newsletter</p>
      </motion.div>
      <div className="subscription__form">
        <input type="text" placeholder="Enter your email address" />
        <button type="button">Get Started</button>
      </div>
    </section>
  );
}

export default Subscription;
