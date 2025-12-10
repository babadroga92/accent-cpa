import React from "react";
import "./Services.css";
import taxIcon from "../assets/tax.png";
import bookkeepingIcon from "../assets/bookkeeping.png";
import gavelIcon from "../assets/gavel.png";
import advisoryIcon from "../assets/advisory.png";

function Services() {
  return (
    <section id="services" className="section-services">
      <div className="services-inner">
        <p className="services-text">Relax - We've Got Your Books</p>
        <h2 className="services-title">Services</h2>
        <p className="services-description">
          <strong>Accent CPA makes tax season feel manageable and under control.</strong>
          <br />
          Our income tax preparation experts have the knowledge and experience to guide
          you through every step of meeting your individual and business tax obligations.
          The dedicated Accent CPA team is here not only to resolve your current tax
          matters, but also to help you build a strong financial foundation so your
          business can move forward with confidence and avoid future complications.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <button className="service-button" type="button">
                <img src={taxIcon} alt="Tax Preparation" className="service-icon" />
                <span>Tax Preparation</span>
              </button>
              <div className="service-overlay">
                <h3>📘 Tax Preparation</h3>
                <ul>
                  <li>Individual & business tax returns</li>
                  <li>Multi-state filings</li>
                  <li>Year-round tax planning</li>
                  <li>Deduction & credit optimization</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <button className="service-button" type="button">
                <img src={bookkeepingIcon} alt="Bookkeeping" className="service-icon" />
                <span>Bookkeeping</span>
              </button>
              <div className="service-overlay">
                <h3>📒 Bookkeeping</h3>
                <ul>
                  <li>Monthly bookkeeping</li>
                  <li>Clean financials</li>
                  <li>Clear cash flow</li>
                  <li>Clean-up & catch-up bookkeeping</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <button className="service-button" type="button">
                <img src={gavelIcon} alt="Tax Resolution" className="service-icon" />
                <span>Tax Resolution</span>
              </button>
              <div className="service-overlay">
                <h3>🛠️ Tax Resolution & IRS Support</h3>
                <ul>
                  <li>IRS notices & audits</li>
                  <li>Back-tax help</li>
                  <li>Payment plan & settlement negotiation</li>
                  <li>Penalty abatement strategies</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <button className="service-button" type="button">
                <img src={advisoryIcon} alt="Advisory" className="service-icon" />
                <span>Advisory</span>
              </button>
              <div className="service-overlay">
                <h3>🎯 Advisory & Profit Strategy</h3>
                <ul>
                  <li>Proactive guidance</li>
                  <li>Cash-flow planning</li>
                  <li>Growth strategy</li>
                  <li>Better decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
