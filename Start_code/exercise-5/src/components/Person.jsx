import React from "react";

export default function Person({ person }) {
  return (
    <li className="person-item">
      <button>
        <img src={person.image.src} alt={person.image.alt} />
        <h3>{person.name}</h3>
      </button>
      <p>{person.hobby}</p>
      <p>{person.description}</p>
    </li>
  );
}
