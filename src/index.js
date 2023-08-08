import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postData = [
  { text: "Hey Guys!", id: 1, likes: 3 },
  { text: "Walking...", id: 2, likes: 5 },
  { text: "On a run", id: 3, likes: 7 },
  { text: "Relaxing", id: 4, likes: 13 },
]

const messages = [
  { name: "Ivan Ivanov", message: "How is your day?", id: 1 },
  { name: "Elon Musk", message: "Let's go to space!", id: 2 },
  { name: "Bill Gates", message: "What are you doing today?", id: 3 },
  { name: "Jon Jones", message: "Hello?", id: 4 },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
