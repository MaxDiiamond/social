import React from "react";
import "./header.css"
import logo from "../../img/logo.avif"

function Header() {
    return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
    )
  }

  export default Header