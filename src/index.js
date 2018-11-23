import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Form from "../components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Contact name="Jack" email="Jackky1929@gmail.com" phone="55-555-5555" />
      <Contact
        name="Subsin"
        email="Jackkyboot56@gmail.com"
        phone="44-444-4444"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
