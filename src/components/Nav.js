import React from "react";
import "./Nav.scss";
import { useSelector } from "react-redux";

function Nav() {
  const { email } = useSelector((state) => state.auth);
  return (
    <div className="nav">
      <h2>Task Manager</h2>
      <h4>Hi {email}</h4>
    </div>
  );
}

export default Nav;
