import React from "react"
import "./profile.css"
import Posts from "./posts/Posts"
import ProfileInfo from "./profileInfo/ProfileInfo"

export default function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo users={props.postData.users} />
      <Posts  postData={props.postData.postData} />
    </div>
  )
}