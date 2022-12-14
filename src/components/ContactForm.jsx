import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} /*triggers sendEmail function*/>
        <div className="contact-container">
          <div className="contact-box">
            <div className="left"> </div>
            <div className="right">
              <h2 className="contact-h2">Get in touch with me!</h2>
              <label>Name</label>
              <input
                type="text"
                className="field"
                placeholder="name"
                name="user_name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                className="field"
                placeholder="email"
                name="user_email"
                required
              />
              <label>Message</label>
              <input
                type="text"
                className="field area"
                placeholder="How Can I Help?"
                name="message"
                required
              />
              <button className="btn" type="submit" value="Send">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
