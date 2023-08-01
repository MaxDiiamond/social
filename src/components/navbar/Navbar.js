import React from "react"
import "./navbar.css"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
    <div className="navbar">
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/dialouges">Messages</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
    )
  }
