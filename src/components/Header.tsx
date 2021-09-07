import { useState } from "react";
import Logo from "../assets/images/LogoForks.svg";
import WavyLine from "../assets/images/header-wave.svg";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="background-header">
        <div className="navbar-content-container">
          <div className="logo">
            <img className="flex-right" src={Logo} alt="Logo" />
          </div>
          <div className="navbar hidden">
            <button className="header-btn">Home</button>
            <button className="header-btn">Recipes</button>
            <button className="header-btn">About me</button>
          </div>
          <div className="hamburger-nav-container">
            <div className="hamburger-btn-bg"></div>
            <button className="hamburger-btn" onClick={() => setOpen(!open)}>
              {open ? (
                <i className="fas fa-bars"></i>
              ) : (
                <i className="fas fa-times"></i>
              )}
            </button>
            <div className="hamburger-nav">
              <ul>
                <li>
                  <button className="hamburger-list-btn">Home</button>
                </li>
                <li>
                  <button className="hamburger-list-btn">Recipes</button>
                </li>
                <li>
                  <button className="hamburger-list-btn">About me</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img className="wavy-line-header" src={WavyLine} alt="wavy line" />
      </div>
    </>
  );
}

export default Header;