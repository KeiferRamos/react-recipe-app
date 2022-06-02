import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { connect } from "react-redux";

function Links({ name, path, screenWidth, closeNav }) {
  const [pathName, setPathName] = useState(window.location.pathname);
  const navigate = useNavigate();

  const navigateUser = () => {
    navigate(path);
    closeNav();
  };

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <p
      style={{ color: `${path == pathName ? "green" : "#5f929c"}` }}
      onClick={() => navigateUser()}
      className={`${screenWidth <= 500 && "mobile-link"}`}
    >
      {name}
    </p>
  );
}

export default connect((state) => state)(Links);
