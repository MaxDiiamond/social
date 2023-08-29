import React from "react";
import User from "./user/User";

export default function Users(props) {
    return(
        
        <div className="Users">
            <h2>Users... </h2>
            {props.profilePage.postData.map(obj => <User name={obj.name} ava={obj.ava} />)}
        </div>
    )
}