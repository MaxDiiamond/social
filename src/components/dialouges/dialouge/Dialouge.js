import React from "react";
import "./dialouge.css"

export default function Dialouge(props) {
    return (
        <div className="dialouge">
            <p>{props.name}</p>
            <p>{props.message}</p>
        </div>
    )
}