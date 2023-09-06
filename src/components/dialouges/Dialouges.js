import React from "react";
import Dialouge from "./dialouge/Dialouge";


export default function Dialouges(props) {
    let newMessage = React.createRef()
    let addMessage = () => {
        props.addMessage(newMessage.current.value)
        newMessage.current.value = ""
    }

    let onMessageChange = () => {
        props.onMessageChange(newMessage.current.value)
    }

    return (
        <div className="dialouges">
            {props.dialouges.messages.map(e => <Dialouge name={e.name} message={e.message} key={e.id} id={e.id} />)}

            {/* <Dialouge name={messages[1].name} message={messages[1].message} />
            <Dialouge name={messages[2].name} message={messages[2].message} /> */}

            <input
                ref={newMessage}
                type="text"
                placeholder="Write a Message..."
                value={props.newMessageText}
                onChange={onMessageChange}
            />
            <button onClick={addMessage}>Send</button>
        </div>
    )
}