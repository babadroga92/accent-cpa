import React from "react";
import "./Header.css";

function Header({ scrollToContact }) {
  return (
    <header className="site-header">
      <div className="logo">
        <span className="logo-accent">ACCENT</span>
        <span className="logo-cpa">CPA</span>
      </div>

      <nav className="main-nav">
        <a href="#top">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <button
          className="link-like"
          type="button"
          onClick={scrollToContact}
        >
          Contact
        </button>
      </nav>

      <div className="header-actions">
        <a
          href="https://mbcscpa.taxdome.com/app/insights"
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Portal
        </a>
        <a
          href="https://www.convergepay.com/hosted-payments/?ssl_txn_auth_token=zzZCCirgT4Gc8yjGQjz7kAAAAZgf%2FW02#!/payment-method"
          className="btn btn-filled"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pay Invoice
        </a>
      </div>
    </header>
  );
}

export default Header;
