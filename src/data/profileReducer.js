const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"

let initialState = {
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
    }


let profileReducer = (state = initialState, action) => {
    if (action.type == ADD_POST) {
        let newPost = {
            text: state.newPostText,
            id: state.postData[0].posts.length + 1,
            likes: 9,
        }
        state.postData[0].posts.unshift(newPost)
        state.newPostText = ""
    } else if (action.type == POST_CHANGE) {
        state.newPostText = action.text
    }
    return state
}

export default profileReducer

export let addPostAC = () => {
    return {
        type: ADD_POST,
        id: 1
    }
}

export let onPostChangeAC = (text) => {
    return {
        type: POST_CHANGE,
        text: text,
        id: 2
    }
}