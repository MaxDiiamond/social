import React from "react";
import ava from "../../../img/Emusk.jpg"

export default function ProfileInfo(props) {
    return (
        < div className="me" >
            <img src={ava} alt="musk" />
            <h2>{props.users[0].firstName} {props.users[0].lastName}</h2>
        </div >
    )
}