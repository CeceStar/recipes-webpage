import { useState } from "react";
import Logo from "../assets/images/LogoForks.svg";
import WavyLine from "../assets/images/header-wave.svg";

function Header() {
  const [open, setOpen] = useState(false);

  const navbarBg = document.getElementById("hamburger-btn-bg");
  const navbarBtns = document.getElementById("hamburger-nav");

  function showNavbar(): void {
    if (navbarBg !== null && navbarBtns !== null) {
      navbarBg.style.display = "block";
      navbarBtns.style.display = "block";
    }
  }
  function hideNavbar(): void {
    if (navbarBg !== null && navbarBtns !== null) {
      navbarBg.style.display = "none";
      navbarBtns.style.display = "none";
    }
  }

  return (
    <>
      <div className="background-header">
        <div className="navbar-content-container">
          <div className="logo">
            <img className="flex-right" src={Logo} alt="Logo" />
          </div>
          <div className="navbar">
            <button className="header-btn">Home</button>
            <button className="header-btn">Recipes</button>
            <button className="header-btn">About me</button>
          </div>
          <div className="hamburger-nav-container">
            <div id="hamburger-btn-bg"></div>
            <button
              id="hamburger-btn"
              onClick={() => {
                setOpen(!open);
                if (open === true) {
                  showNavbar();
                } else {
                  hideNavbar();
                }
              }}>
              {open ? (
                <i className="fas fa-bars"></i>
              ) : (
                <i className="fas fa-times"></i>
              )}
            </button>
            <div id="hamburger-nav">
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
