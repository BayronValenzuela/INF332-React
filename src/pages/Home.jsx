import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>HOME</h1>
      <div className="button-group">
        <Link to="/inventory" className="home-button">
          Inventario
        </Link>
        <Link to="/voluntarios" className="home-button">
          Voluntarios
        </Link>
      </div>
    </div>
  );
}

export default Home;
