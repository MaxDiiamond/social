import React from "react";
import Dialouge from "./dialouge/Dialouge";


export default function Dialouges(props) {
    return (
        <div className="dialouges">
            {props.messages.map(e => <Dialouge name={e.name} message={e.message} id={e.id} />)}

            {/* <Dialouge name={messages[1].name} message={messages[1].message} />
            <Dialouge name={messages[2].name} message={messages[2].message} /> */}

            <input type="text" placeholder="Write a Message..." />
            <button>Send</button>
        </div>
    )
}