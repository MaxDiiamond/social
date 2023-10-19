import React from "react"
import "./profile.css"
import Posts from "./posts/Posts"
import ProfileInfo from "./profileInfo/ProfileInfo"

export default function Profile(props) {
  let user
  props.profilePage.postData.filter(obj => { return obj.id === 0 }).map(obj => user = obj)

  return (
    <div className="profile">
      <ProfileInfo name={user.name} ava={user.ava} />
      <Posts
        posts={user.posts}
        ava_mini={user.ava_mini}
        name={user.name}
        newPostText={props.newPostText}
        dispatch={props.dispatch} />
    </div>
  )
}