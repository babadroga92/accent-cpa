import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

function ContactSection() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus(null);

    emailjs
      .sendForm(
        "service_id",   // TODO: replace with your EmailJS service ID
        "template_id",  // TODO: replace with your EmailJS template ID
        formRef.current,
        "public_key"    // TODO: replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSending(false);
          setFormStatus("success");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setIsSending(false);
          setFormStatus("error");
        }
      );
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-inner">
        <h2>Request Consultation</h2>
        <p className="contact-intro">
          Share a few details below and we’ll follow up to schedule a time that works
          for you.
        </p>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="user_name"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="user_email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="(000) 000-0000"
            />
          </div>
          <div className="form-field">
            <label htmlFor="service">Service interested in</label>
            <select id="service" name="service">
              <option value="">Select a service</option>
              <option value="business-ind-tax">Business &amp; Individual Tax</option>
              <option value="bookkeeping">Bookkeeping</option>
              <option value="tax-resolution">Tax Resolution</option>
              <option value="advisory">Advisory</option>
            </select>
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="How can we help?"
              required
            />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us a bit about your situation..."
              required
            ></textarea>
          </div>
          <div className="form-actions form-field-full">
            <button type="submit" className="btn btn-filled" disabled={isSending}>
              {isSending ? "Sending..." : "Submit"}
            </button>
          </div>
          {formStatus === "success" && (
            <p className="form-status form-status-success">
              Thank you! Your message has been sent.
            </p>
          )}
          {formStatus === "error" && (
            <p className="form-status form-status-error">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
