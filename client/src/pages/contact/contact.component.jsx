import React, { useState } from "react";
import "./contact.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import axios from "axios";

const ContactPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedWhileEmpty, setIsClickedWhileEmpty] = useState(false);

  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { name, email, subject, message } = userMessage;

  const handleSubmit = async event => {
    event.preventDefault();

    setUserMessage({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    const formMessage = await axios.post("/api/form", {
      name,
      email,
      subject,
      message
    });

    setIsClicked(true);

    setTimeout(() => setIsClicked(false), 3000);

    return formMessage;
  };

  const handleClick = () => {
    if (message !== "" && email !== "") {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 3000);
      return;
    }

    setIsClickedWhileEmpty(true);
    setTimeout(() => setIsClickedWhileEmpty(false), 3000);
    return;
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserMessage({ ...userMessage, [name]: value });
  };

  return (
    <div className="contact-page">
      <h1 className="title">Contact Us</h1>
      <p className="description">
        If you have any questions, concerns, or if you need any additionl
        information, feel free to contact us!
        <br />
        You can contact us directly
        <a href="mailto:support@selerro.com" className="contact-link">
          {" "}
          via email{" "}
        </a>
        or by filling out the contact form on this page. We'll try our best to
        respond within 24 hours!
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            spellCheck="false"
            autoComplete="on"
            name="name"
            label="Name"
            value={name}
            handleChange={handleChange}
          />
          <FormInput
            type="email"
            spellCheck="false"
            autoComplete="on"
            name="email"
            label="Email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="text"
            spellCheck="true"
            autoComplete="on"
            name="subject"
            label="Subject"
            value={subject}
            handleChange={handleChange}
          />
          <textarea
            name="message"
            cols="60"
            rows="10"
            type="text"
            spellCheck="true"
            autoComplete="on"
            placeholder="Message..."
            value={message}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <div
            className="message-sent"
            style={{ display: isClicked ? "block" : "none" }}
          >
            Your Message Has Been Sent!
          </div>
          <div
            className="your-message-is-empty"
            style={{ display: isClickedWhileEmpty ? "block" : "none" }}
          >
            Your Email Or Message Is Empty!
          </div>
          <CustomButton type="submit" onClick={handleClick}>
            Submit
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
