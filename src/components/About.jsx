import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="section-about">
      <h2>About Us</h2>

      <div className="about-columns">
        <p>
          Accent CPA was founded on a simple mission: to bring clarity,
          confidence, and strategy to every financial decision our clients make.
          We believe accounting should be more than compliance — it should be a
          partnership that helps individuals and businesses grow with stability
          and purpose.
        </p>

        <p>
          With experience across tax preparation, bookkeeping, advisory
          services, and year-round financial support, our team combines
          precision with a personalized approach. We take time to understand
          your goals, explain your options clearly, and provide guidance that
          empowers better financial outcomes.
        </p>

        <p>
          Whether you're an entrepreneur, a busy professional, or a growing
          business, Accent CPA offers consistent support and proactive insight.
          Our commitment is to deliver accurate work, timely communication, and
          strategies that help you navigate today’s challenges while planning
          for tomorrow.
        </p>
      </div>
    </section>
  );
}

export default About;
