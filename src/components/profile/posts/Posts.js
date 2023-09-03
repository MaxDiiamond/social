import React from "react"
import Post from "./post/Post"



export default function Posts(props) {
    let postText = React.createRef()
    let addPost = ()=> {
        props.addPost(postText.current.value)
        postText.current.value = ""
    }

    return (
        <div className="posts">
            <h2>My posts...</h2>
            <input ref={postText} type="text" placeholder="Enter a post!" />
            <button onClick={addPost}>Add Post</button>

            {props.posts.map(e => <Post message={e.text} key={e.id} id={e.id} likes={e.likes} ava_mini={props.ava_mini} name={props.name} />)}
        </div>
    )
}

