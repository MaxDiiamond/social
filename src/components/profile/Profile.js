import React from "react"
import "./profile.css"
import ava from "../../img/Emusk.jpg"
import Posts from "./posts/Posts"

export default function Profile(props) {
    return (
    <div className="profile">
      <div className="me">
        <img src={ava} alt="musk" />
        <h2>{props.name}</h2>
      </div>
      <Posts />
    </div>
    )
  }