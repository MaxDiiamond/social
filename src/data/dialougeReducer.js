const ADD_MESSAGE = "ADD-MESSAGE"
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE"

let initialState = {
    messages: [
        { name: "Ivan Ivanov", message: "How is your day?", id: 1 },
        { name: "Elon Musk", message: "Let's go to space!", id: 2 },
        { name: "Bill Gates", message: "What are you doing today?", id: 3 },
        { name: "Jon Jones", message: "Hello?", id: 4 },
    ],

    newMessageText: ""
}

let dialougeReducer = (state = initialState, action) => {
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