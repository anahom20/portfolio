import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: auto;
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_USER_ID")
      .then((result) => {
        alert("Message Sent!");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
