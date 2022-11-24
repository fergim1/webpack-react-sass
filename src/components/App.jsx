import React from "react";
import Cat from "../assets/images/cat.png";

const API = process.env.API;

const App = () => {
  return (
    <div>
      <h1>Hello world, cambia?? !</h1>
      <p>{API}</p>
      <img src={Cat} alt="cat" />
    </div>
  );
};

export default App;
