import React from "react";
import ava_mini from "../../../../img/Emusk_mini.jpg"

export default function Post(props) {
    return (
        <div className="post">
            <img src={ava_mini} alt="musk" />
            <span>Elon Musk</span>
            <p>{props.message}</p>
        </div>
    )
}