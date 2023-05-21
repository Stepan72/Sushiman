import React from "react";

import "../styles/sections/hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="/assets/sushi-1.png" alt="sushi" />
        <h2>
          日 <br /> 本 <br /> 食
        </h2>
        <div className="hero-image__overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-content-info">
          <h1>Feel the taste Japanese Food</h1>
          <p>Feel the taste Japanese Food from anywhere and anytime.</p>
          <div className="hero-content__buttons">
            <button className="hero-content__order-button">Order Now</button>
            <button className="hero-content__play-button">
              <img src="/assets/play-circle.svg" alt="play" />
              How to Order
            </button>
          </div>
        </div>
        <div className="hero-content__testimonial">
          <div className="hero-content__customer flex-center">
            <h4>
              24<span>K+</span>
              <p>Happy Customers</p>
            </h4>
          </div>
          <div className="hero-content__review">
            <img src="/assets/user.png" alt="user" />
            <p>
              "This is the best Japanese Food delivery service that ever
              existed."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
