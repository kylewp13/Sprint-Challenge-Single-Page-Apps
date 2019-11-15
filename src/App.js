import React from "react";
import Header from "./components/Header.js";
import  WelcomePage from "./components/WelcomePage"
import LocationsList from './components/LocationsList'
import { Route, Link } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Route exact path="/" component={WelcomePage} />
      <Route  path="/characters" component={Header} />
      <Route path="/location" component={LocationsList} />
      <Link to="/"><button>home</button></Link>
      <Link to="/location"><button>Planets</button></Link>
    </main>
  );
}