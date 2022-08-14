// this is the service card component.
// it is basically a function which takes logo,title,& description parameters to generate a service card.

import React from "react";

function App (props) {
  return(
    <div className="serviceCard">
      <img className="logo" src={props.logo} alt="services logo"></img>
      <div className="aboutLogo">
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
      </div>
      <button className="contactButton">Click to Contact</button>
    </div>
  )
};

export default App;