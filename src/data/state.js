let state = {

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

}

export let addPost = (postText) => {
    let newPost = {
        text: postText,
        id: state.profilePage.postData[0].posts.length + 1,
        likes: 9,
    }
    state.profilePage.postData[0].posts.unshift(newPost)
    state.profilePage.newPostText = ""
    rerenderTree(state)
}

export let onPostChange = (text) => {
    state.profilePage.newPostText = text
    rerenderTree(state)
}

export let onMessageChange = (text) => {
    state.dialougePage.newMessageText = text
    rerenderTree(state)
}

export let addMessage = (text) => {
    let newMessage = {
        name: "",
        message: text,
        id: state.dialougePage.messages.length + 1,
    }
    state.dialougePage.messages.unshift(newMessage)
    rerenderTree(state)
}

let rerenderTree = ()=> {
    console.log("its fake function");
}

export let subscribe = (observer)=> {
    rerenderTree = observer
}

export default state 

window.state = state