import React from "react";
import "./Hero.css";

function Hero({ scrollToContact }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          Accent <span className="eyebrow-white">CPA</span>
        </p>
        <h1 className="hero-title">Where accuracy meets care</h1>

        <button
          className="btn btn-filled hero-btn"
          type="button"
          onClick={scrollToContact}
        >
          Request Consultation
        </button>
      </div>
    </section>
  );
}

export default Hero;
