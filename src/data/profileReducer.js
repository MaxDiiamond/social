const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"

let profileReducer = (action, state) => {
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