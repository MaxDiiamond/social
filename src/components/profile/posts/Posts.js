import React from "react"
import Post from "./post/Post"

export default function Posts() {
    return (
        <div className="posts">
            <h2>My posts...</h2>
            <input type="text" placeholder="Enter a post!" />
            <button>Add Post</button>
            <Post message="Hey Guys!" />
            <Post message="Walking..." />
            <Post message="On a run" />
            <Post message="Relaxing" />
        </div>
    )
}

