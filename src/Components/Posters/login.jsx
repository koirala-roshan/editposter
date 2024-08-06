import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Anandutsav from "./anandutsav";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tmqtsbd", "template_m3dzzif", form.current, {
        publicKey: "rdStUfWtC91vQZenl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.location.replace("/landing");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="row form-group ms">
        <h2 className="mt-2">Please fill your details</h2>

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Phone</label>
          <input type="text" name="user_phone" required />
          <label>Teachers Code (Optional) </label>
          <input type="text" name="user_code" />
          <label>Address</label>
          <input type="text" name="user_addresss" required />
          <br />
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    </div>
  );
};
