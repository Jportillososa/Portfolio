import React from "react";
import "./Contact.css";
import ContactForm from "../components/ContactForm";
function Contact() {
  const FixedMargin = {
    marginTop: 0,
  };
  return (
    <>
      <div className="fullpage1">
        {/* <h1 style={FixedMargin}>Contact Page</h1> */}
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
