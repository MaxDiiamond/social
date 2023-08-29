import React from "react";

export default function ProfileInfo(props) {
    return (
        < div className="me" >
            <img src={props.ava} alt="musk" />
            <h2>{props.name}</h2>
        </div >
    )
}