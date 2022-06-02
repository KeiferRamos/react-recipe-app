import React, { useState } from "react";
import "../styles/navbar.css";
import Links from "./links";
import { links } from "../data";
import { connect } from "react-redux";
import { FaBars, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar({ screenWidth }) {
  const navigate = useNavigate();
  const [showlinks, setshowLinks] = useState(false);

  const closeNav = () => setshowLinks(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg"
          alt=""
        />
        <p>Spoonacular API</p>
      </div>
      <div className="searchbar" onClick={() => navigate("/browser")}>
        {screenWidth > 800 && (
          <input readOnly type="text" placeholder="e.g chicken salad" />
        )}
        <FaSearch className="search-icon" />
      </div>
      <div
        className={`${screenWidth <= 600 ? "mobile-links" : "desktop-links"} ${
          showlinks && "show"
        }`}
      >
        {links.map((link, i) => {
          return <Links key={i} {...link} closeNav={closeNav} />;
        })}
      </div>
      {screenWidth <= 600 && (
        <FaBars onClick={() => setshowLinks(!showlinks)} />
      )}
    </div>
  );
}

export default connect((state) => state)(Navbar);
