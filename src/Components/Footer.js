import React, { useEffect } from "react";
// Assets
import icon from "../Assets/Icons/marx-icon-1024x684.jpg";
export default function Footer() {
  return (
    <div
      id="Footer"
      className="relative flex-column justify-between"
      data-scroll-section
    >
      <div className="iconContainer  absolute flex justify-center align-center">
        <img src={icon} alt="pencil" />
      </div>

      <h2>
        We use curiosity to create idea-led solutions that drive success.
        <a href="#"> Get in touch</a>
      </h2>
      <div className="footerFooter flex justify-between">
        <p>@Marx</p>
        <p>Contact Us</p>
        <p>Instagram,Linkedin,Facebook</p>
      </div>
    </div>
  );
}
