import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="hotel_contact_wrapper section__padding">
      <div className="hotel_contact-heading flex__center">
        <h2>Contact Us</h2>
      </div>
      <div className="hotel_contact-heading-p">
        <p>
          Fire a query through e-mail we'll get back to you in less than 45 min
        </p>
      </div>
      <div className="contact_content flex__center">
        <div className="contact_form_wrapper">
          <form action="https://formspree.io/f/xoqzwjlo" method="POST">
            <div>
              <input
                type="text"
                name="username"
                placeholder="User name"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                cols="30"
                rows="6"
                autocomplete="off"
                placeholder="Input your message"
                autoComplete="off"
                required
              ></textarea>
            </div>
            <div className="submit_button">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
        <div className="form_location_wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.6013327809997!2d74.48514471451134!3d14.100695692912426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc46d9da4ccbef%3A0xe21d3097f075149!2sAmani%20Beach%20Homestay!5e0!3m2!1sen!2sin!4v1677567834720!5m2!1sen!2sin"
            width="670"
            height="450"
            style={{ border: 40, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
