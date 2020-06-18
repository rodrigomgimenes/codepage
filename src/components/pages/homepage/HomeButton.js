import React from "react";
import { Link, useLocation } from "react-router-dom";

function HomeButton() {
  const styles = {
    logoSize: {
      height: "56px", 
      width: "56px"
    }
  }

  const location = useLocation();

  return (
    <Link to="/" className={location.pathname === "/" ? "navbar-brand nav-link active" : "navbar-brand nav-link"}>
      <b><img src="./assets/icons/logo.png" alt="logo" className="dark-logo" style={styles.logoSize} /></b>
      <span className="text-inverse"><strong className="text-coffee">code</strong>page</span>
    </Link>
  );
}

export default HomeButton;

