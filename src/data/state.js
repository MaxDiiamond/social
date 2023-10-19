import profileReducer from "./profileReducer"

const ADD_MESSAGE = "ADD-MESSAGE"
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE"

let store = {
    _state: {

        profilePage: {
            postData: [
                {
                    name: "Elon Musk",
                    ava: "img/Emusk.jpg",
                    ava_mini: "img/Emusk_mini.jpg",
                    id: 0,
                    posts: [
                        { text: "Hey Guys!", id: 1, likes: 3 },
                        { text: "Relaxing", id: 2, likes: 13 },
                    ]
                },

                {
                    name: "Bill Gates",
                    ava: "img/Bill.jpg",
                    ava_mini: "img/Bill.jpg",
                    id: 1,
                    posts: [
                        { text: "Hey Guys!", id: 1, likes: 334 },
                        { text: "Relaxing", id: 2, likes: 133 },
                    ]
                }
            ],

            newPostText: ""
        },

        dialougePage: {
            messages: [
                { name: "Ivan Ivanov", message: "How is your day?", id: 1 },
                { name: "Elon Musk", message: "Let's go to space!", id: 2 },
                { name: "Bill Gates", message: "What are you doing today?", id: 3 },
                { name: "Jon Jones", message: "Hello?", id: 4 },
            ],

            newMessageText: ""
        }
    },


    onMessageChange(text) {
        this._state.dialougePage.newMessageText = text
        this.rerenderTree(this._state)
    },

    addMessage(text) {
        let newMessage = {
            name: "",
            message: text,
            id: this._state.dialougePage.messages.length + 1,
        }
        this._state.dialougePage.messages.unshift(newMessage)
        this.rerenderTree(this._state)
    },

    rerenderTree() {
        console.log("its fake function");
    },

    subscribe(observer) {
        this.rerenderTree = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state = profileReducer(this._state.profilePage, action)
        this.rerenderTree(this._state)

        // if (action.type == ADD_MESSAGE) {
        //     let newMessage = {
        //         name: "",
        //         message: this._state.dialougePage.newMessageText,
        //         id: this._state.dialougePage.messages.length + 1,
        //     }
        //     this._state.dialougePage.messages.unshift(newMessage)
        //     this.rerenderTree(this._state)
        // } else if (action.type == ON_MESSAGE_CHANGE) {
        //     this._state.dialougePage.newMessageText = action.text
        //     this.rerenderTree(this._state)
        // }
    },


}
window.state = store._state

export default store

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