import React from "react"
import Post from "./post/Post"



export default function Posts(props) {
    return (
        <div className="posts">
            <h2>My posts...</h2>
            <input type="text" placeholder="Enter a post!" />
            <button>Add Post</button>

            {props.posts.map(e => <Post message={e.text} id={e.id} likes={e.likes} ava_mini={props.ava_mini} name={props.name} />)}
        </div>
    )
}

