import React from "react";
import { Link, useLocation } from "react-router-dom";

function Assignment(props) {
  const location       = useLocation();
  const assignmentHref = props.href;

  return (
    <li>
      <Link to={assignmentHref} className={location.pathname === assignmentHref ? "nav-link active text-coffee" : "nav-link text-inverse"}>
        - {props.assignment}
      </Link>
    </li>
  );
}

export default Assignment;

