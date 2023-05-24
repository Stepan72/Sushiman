"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import "../styles/sections/subscribe.scss";

function Subscription() {
  return (
    <section className="subscription flex-center" id="services">
      <h2>
        Get offers stright <br /> to your inbox
      </h2>
      <p>Sign up for the Sushiman newsletter</p>
      <div className="subscription__form">
        <input type="text" placeholder="Enter you email address" />
        <button type="button">Get started</button>
      </div>
    </section>
  );
}

export default Subscription;
