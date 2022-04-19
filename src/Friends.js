import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

const Friends = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <h1>Learn Lazyloading...</h1>
        <p>FRINDS LIST</p>
      </nav>
      <ul>
        <li>
          <Link to="/Dyson">Dyson</Link>
        </li>
        <li>
          <Link to="/Felix">Felix</Link>
        </li>
        <li>
          <Link to="/Stalny">Stanly</Link>
        </li>
        <li>
          <Link to="/Mani">Mani</Link>
        </li>
        <li>
          <Link to="/Karthi">Karthi</Link>
        </li>
      </ul>
    </div>
  );
};

export default Friends;
