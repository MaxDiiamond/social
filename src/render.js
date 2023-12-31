import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './data/state';
import store from "./data/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
            
                state={state}
                addMessage={store.addMessage.bind(store)}
                onMessageChange={store.onMessageChange.bind(store)}
                dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}

reportWebVitals();