import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import { fetchMembres } from "../../actions/Membres/membersSlice"; // Vérifiez le chemin correct

export default function Membres() {
  const dispatch = useDispatch();
  const { loading, membres, error } = useSelector(state => state.membres);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Exemple d'état de connexion

  // Fetch les membres après la connexion
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchMembres());
    }
  }, [isAuthenticated, dispatch]);

  // Prépare les données pour les `rows` de `Tables`
  const rows = membres.map(membre => ({
    Prénom: membre.Prenom,
    Nom: membre.Nom,
    Email: membre.Email,
    Téléphone: membre.Telephone,
  }));

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          {loading ? (
            <p>Chargement...</p>
          ) : error ? (
            <p>Erreur: {error}</p>
          ) : (
            <Tables
              headerValues={["Prénom", "Nom", "Email", "Téléphone"]}
              rows={rows}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
