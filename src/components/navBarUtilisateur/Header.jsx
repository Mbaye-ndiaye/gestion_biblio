import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, Drawer } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import ImageCard from "../../assets/image/livre1.jpeg";

import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

// Header Component
export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Titre aligné à gauche */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Tànkub xam-xam
          </Typography>

          <div style={{ marginRight: "auto" }}>
            <Button color="inherit" variant="contained">
              <NavLink
                to="/emprunts"
                style={{ textDecoration: "none", color: "black" }}
              >
                Mes Empruntes
              </NavLink>
            </Button>
            <Button
              color="inherit"
              variant="contained"
              style={{ margin: "auto" }}
            >
              <NavLink
                to="/emprunts"
                style={{ textDecoration: "none", color: "black" }}
              >
                Mes livres
              </NavLink>
            </Button>
          </div>
          {/* Bouton centré */}

          {/* Recherche alignée à droite */}
          <div style={{ display: "flex", marginLeft: "auto" }}>
            <InputBase
              placeholder="Search..."
              style={{
                marginRight: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            <SearchIcon />
          </div>

          {/* Boutons avec des marges */}
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "20px",
            }}
          >
            <Button color="inherit" variant="contained">
              Login
            </Button>
          </NavLink>

          <Button
            color="inherit"
            variant="contained"
            style={{ marginLeft: "20px" }}
            onClick={handleDrawerOpen}
          >
            <ShoppingCartIcon /> My basket
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <Typography variant="h6" sx={{ m: 2 }}>
            My Basket
          </Typography>
          {/* Contenu du panier ici */}
          <Box sx={{ p: 2 }}>
            <Box sx={{ maxWidth: 345 }}>
              <CardActionArea sx={{ display: "flex", gap: 3 }}>
                <CardMedia
                  component="img"
                  height="190"
                  width="20"
                  image={ImageCard}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Lizard
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Box>
          </Box>
          <NavLink
            to="/Panier"
            style={() => ({
              textDecoration: "none",
            })}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                backgroundColor: "gray",
                marginLeft: 2,
                marginRight: 2,
                marginTop: 30,
                paddingY: "10px",
                borderRadius: "10px",
              }}
            >
              Panier
            </Typography>
          </NavLink>
        </Box>
      </Drawer>
    </>
  );
}
