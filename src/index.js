import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Comment from './pages/Comment';
import data from './data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
let items = localStorage.getItem('data')
if (items === null) {
  localStorage.setItem('raw', JSON.stringify(data));
  console.log("woy");
}else {
  localStorage.setItem('raw', JSON.stringify(items));
}
root.render(
  <React.StrictMode>
    <Comment/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
