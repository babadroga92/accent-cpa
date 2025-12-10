import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-branding">
          <h3 className="footer-logo">
            <span className="logo-accent">ACCENT</span>{" "}
            <span className="logo-cpa">CPA</span>
          </h3>
          <p className="footer-tagline">Tax Accounting Business</p>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Address</h4>
          <p>
            522 S. Independence Blvd.
            <br />
            Suite 204
            <br />
            Virginia Beach, VA 23464
          </p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Email</h4>
          <p>info@accent.cpa</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Phone</h4>
          <p>(757) 981-0999</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Accent CPA, LLC</p>
      </div>
    </footer>
  );
}

export default Footer;
