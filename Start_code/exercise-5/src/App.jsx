import React from "react";
import Person from "./components/Person.jsx";
import { PERSON } from "./data.js";

function App() {
  return (
    <div className="app">
      <header>
        <h1>PERSONS</h1>
      </header>
      <div className="cards-view">
        <div className="cards-grid">
          {PERSON.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
