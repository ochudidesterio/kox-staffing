import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [state, setstate] = useState({
    email: "",
    message: "",
    subject: "",
  });
  let { email, message, subject } = state;
  const submit = (e) => {
    e.preventDefault();
    if (email !== "" && subject !== "" && message !== "")
      axios
        .post(
          "https://rocky-headland-27282.herokuapp.com/api/otblabs/contact",
          {
            name: email,
            subject: subject,
            email: email,
            message: message,
          }
        )
        .then((res) => {
          M.toast({ html: "Email sent successfully" });
          setstate({
            email: "",
            message: "",
            subject: "",
          });
        })
        .catch((err) =>
          M.toast({ html: "Sending mail failed please try again" })
        );
  };
  return (
    <div className="contact">
      <Helmet>
        <title> Otblabs | Contact Us </title>
        <meta
          name="description"
          content="Follow us on Facebook , Instagram , LinkedIn & Twitter."
        />
      </Helmet>
      <Fade left>
        <div>
          <h4>Give us a shout. We’re all ears.</h4>
          Getting in touch is easy, just fill out the form.
          <form onSubmit={(e) => submit(e)}>
            <div className="input-field ">
              <input
                value={email}
                onChange={(e) => setstate({ ...state, email: e.target.value })}
                placeholder="Enter email address"
                id="email"
                required
                type="email"
                className="validate white-text"
              />
            </div>
            <div className="input-field ">
              <input
                value={subject}
                onChange={(e) =>
                  setstate({ ...state, subject: e.target.value })
                }
                placeholder="Enter Subject"
                id="subject"
                required
                type="text"
                className="validate white-text"
              />
              <label for="subject"></label>
            </div>
            <div className="input-field">
              <textarea
                id="textarea1"
                required
                value={message}
                placeholder="Enter Message"
                onChange={(e) =>
                  setstate({ ...state, message: e.target.value })
                }
                className="materialize-textarea white-text"
              ></textarea>
            </div>
            <button className="btn btn-large black" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;