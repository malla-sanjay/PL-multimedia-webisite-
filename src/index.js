import React from 'react';
import ReactDOM from 'react-dom/client';
import ServiceCard from './ServiceCard';
import "./serviceCard.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ServiceCard logo={require("./logo/seo.png")} title="SEO Optimization" description="lorem20 is not working on my vs code so i am randomly typing this paragraph."/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

