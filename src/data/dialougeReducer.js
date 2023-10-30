const ADD_MESSAGE = "ADD-MESSAGE"
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE"

let dialougeReducer = (state, action) => {
    if (action.type == ADD_MESSAGE) {
        let newMessage = {
            name: "",
            message: state.newMessageText,
            id: state.messages.length + 1,
        }
        state.messages.unshift(newMessage)
    } else if (action.type == ON_MESSAGE_CHANGE) {
        state.newMessageText = action.text
    }
    return state
}

export default dialougeReducer

export let addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
        id: 1
    }
}

export let onMessageChangeAC = (text) => {
    return {
        type: ON_MESSAGE_CHANGE,
        text: text,
        id: 2
    }
}