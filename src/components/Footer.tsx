import React from "react";
import Logo from "../assets/images/LogoForks.svg";
import WavyLine from "../assets/images/footer-wave.svg";
function Footer() {
  return (
    <>
      <div className="footer-bg">
        <img className="footer-logo" src={Logo} alt="Logo" />
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>Recepies</li>
            <li>About me</li>
          </ul>
        </div>
        <div className="footer-contact-me">
          <h3>Contact me</h3>
          <p>
            Send me an email by clicking{" "}
            <a href="mailto: cecilia.hallerby@gmail.com">here</a>
          </p>
        </div>
        <p className="footer-created-with">
          Webpage designed and coded by Cecilia Hallerby with Typescript, React
          and Sass.
        </p>
        <img className="wavy-line-footer" src={WavyLine} alt="wavy line" />
      </div>
    </>
  );
}

export default Footer;
