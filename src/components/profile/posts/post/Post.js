import React from "react";

export default function Post(props) {
    return (
        <div className="post">
            <img src={props.ava_mini} alt="musk" />
            <span>{props.name} </span>
            <p>{props.message} </p>
            <p className="like">Likes: {props.likes}</p>
        </div>
    )
}