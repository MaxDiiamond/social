import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialougeReducer from "./dialougeReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialougePage: dialougeReducer
}) 

let store = createStore(reducers);

export default store