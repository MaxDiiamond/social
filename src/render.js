import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './data/state';
import { addPost, addMessage } from './data/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} />
        </React.StrictMode>
    );
}

reportWebVitals();