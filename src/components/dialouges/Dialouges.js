import React from "react";
import Dialouge from "./dialouge/Dialouge";

export default function Dialouges() {
    return (
        <div className="dialouges">
            <Dialouge />
            <Dialouge />
            <Dialouge />

            <input type="text" placeholder="Write a Message..." />
            <button>Send</button>
        </div>
    )
}