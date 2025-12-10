import React from "react";
import "./Pricing.css";

function Pricing({ scrollToContact }) {
  return (
    <section id="pricing" className="section-pricing">
      <div className="pricing-inner">
        <h2 className="pricing-title">Pricing</h2>
        <p className="pricing-description">
          <strong>Simple, strategic pricing for small business owners.</strong>
          <br />
          Choose the level of support that matches your stage of growth. All plans
          include expert CPA oversight and year-round support. One-time onboarding
          &amp; tax strategy investment starts at <strong>$1,599</strong>.
        </p>
        <button
          className="btn btn-filled pricing-cta"
          type="button"
          onClick={scrollToContact}
        >
          Schedule a consultation
        </button>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-name">Basic</h3>
              <p className="pricing-tagline">
                For small businesses needing reliable monthly accounting
              </p>
            </div>
            <div className="pricing-price-band">
              <p className="pricing-amount">
                <span className="pricing-start">Start at</span>
                $500<span className="pricing-amount-period">/month</span>
              </p>
              <p className="pricing-subcopy">
                For owners who want clean books, compliant taxes, and a smooth year-end.
              </p>
            </div>
            <div className="pricing-body">
              <ul className="pricing-features">
                <li>What's included</li>
                <li>Monthly bookkeeping &amp; reconciliations</li>
                <li>Ongoing communication and Q&amp;A support</li>
                <li>Business income tax return</li>
                <li>Year-end tax projection</li>
                <li>Standard monthly financial statements</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-name">Core</h3>
              <p className="pricing-tagline">
                For growing businesses that want deeper tax strategy
              </p>
            </div>
            <div className="pricing-price-band">
              <p className="pricing-amount">
                <span className="pricing-start">Start at</span>
                $750<span className="pricing-amount-period">/month</span>
              </p>
              <p className="pricing-subcopy">
                Ideal for businesses that rely on their numbers to make smart decisions
                and reduce taxes.
              </p>
            </div>
            <div className="pricing-body">
              <ul className="pricing-features">
                <li>What's included</li>
                <li>
                  Everything in <strong>Basic</strong>
                </li>
                <li>Annual tax planning session</li>
                <li>Year-end tax strategy meeting</li>
                <li>Assigned client manager</li>
                <li>
                  Actionable insights and recommendations based on your numbers
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-name">Strategic</h3>
              <p className="pricing-tagline">
                For growing businesses that want deeper tax strategy
              </p>
            </div>
            <div className="pricing-price-band">
              <p className="pricing-amount">
                <span className="pricing-start">Start at</span>
                $1750<span className="pricing-amount-period">/month</span>
              </p>
              <p className="pricing-subcopy">
                For established businesses ready to scale with a proactive CPA partner
                at the table.
              </p>
            </div>
            <div className="pricing-body">
              <ul className="pricing-features">
                <li>What's included</li>
                <li>
                  Everything in <strong>Core</strong>
                </li>
                <li>Quarterly advisory &amp; growth strategy sessions</li>
                <li>Customized financial reporting dashboard</li>
                <li>Business goal planning and KPI tracking</li>
                <li>Ongoing accountability and performance check-ins</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
