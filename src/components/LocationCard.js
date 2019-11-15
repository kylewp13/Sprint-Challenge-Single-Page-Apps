import React from "react";

export default function LocationCard({ location }) {
  const { name, type, dimension, residents } = location;

  return(
    <div>
      <h1>{name}</h1>
      <p>{type}</p>
      <p>{dimension}</p>
    </div>
  )
}
