import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        console.log('here is the Results for location:', res)
        setLocation(res.data.results)
      })
      .catch(error => {
        console.log('.get Error:', error)
      })
  }, [])

  return(
    <div>
      {location.map(location => (
        <LocationCard key={location.id} location={location} /> 
      ))}
    </div>
  )
}
