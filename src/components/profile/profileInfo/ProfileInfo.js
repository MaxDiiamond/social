import React from "react";
import ava from "../../../img/Emusk.jpg"

export default function ProfileInfo(props) {
    return (
        < div className="me" >
            <img src={ava} alt="musk" />
            <h2>{props.name}</h2>
        </div >
    )
}