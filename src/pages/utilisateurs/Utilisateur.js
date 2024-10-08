import React from "react";
import { NavLink } from "react-router-dom";

const Utilisateur = () => {
  return (
    <div>
      <h1>
        Utilisateur gestion des livre{" "}
        <NavLink to="/dashboard">Dashboard</NavLink>
      </h1>
    </div>
  );
};

export default Utilisateur;
