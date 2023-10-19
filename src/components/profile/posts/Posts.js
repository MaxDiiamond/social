import React from "react"
import Post from "./post/Post"
import { addPostAC, onPostChangeAC } from "../../../data/profileReducer"



export default function Posts(props) {
    console.log(props)

    let postText = React.createRef()
    let addPost = () => {
        props.dispatch(addPostAC())
        postText.current.value = ""
    }

    let onPostChange = () => {
        props.dispatch(onPostChangeAC(postText.current.value))
    }

    return (
        <div className="posts">
            <h2>My posts...</h2>
            <input
                value={props.newPostText}
                ref={postText}
                type="text"
                placeholder="Enter a post!"
                onChange={onPostChange}
            />
            <button onClick={addPost}>Add Post</button>

            {props.posts.map(e => <Post message={e.text} key={e.id} id={e.id} likes={e.likes} ava_mini={props.ava_mini} name={props.name} />)}
        </div>
    )
}

