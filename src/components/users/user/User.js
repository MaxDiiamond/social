import React from "react";
import "./user.css"
import { NavLink } from "react-router-dom";

export default function User(props) {
    return (
        <div className="user">
            <NavLink to="/profile">
                <img src={props.ava} alt="" />
                <h3>{props.name}</h3>
            </NavLink>
        </div>
    )

}