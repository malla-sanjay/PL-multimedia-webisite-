import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./serviceCard.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App logo={require("./logo/seo.png")} title="this is title" description="lorem20 is not working on my vs code so i am randomly typing this bullshit."/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

