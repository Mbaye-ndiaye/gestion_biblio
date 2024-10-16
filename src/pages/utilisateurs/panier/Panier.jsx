import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ImagePanier from "../../../assets/image/livre1.jpeg";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Header from "../../../components/navBarUtilisateur/Header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Panier() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <Box sx={{ backgroundColor: "gray", height: "110vh" }}>
      <Header />
      <Box sx={{ marginTop: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Produit
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <img
                    src={ImagePanier}
                    alt="Adaptateur"
                    style={{ marginRight: "16px", height: "50px" }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body1">Adaptateur choetech</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ width: "15%" }}>
                    19.500CFA
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", width: "15%" }}
                  >
                    <IconButton
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : 1)
                      }
                    >
                      -
                    </IconButton>
                    <TextField
                      value={quantity}
                      onChange={handleQuantityChange}
                      inputProps={{ min: 1, style: { textAlign: "center" } }}
                      sx={{ width: "50px" }}
                    />
                    <IconButton onClick={() => setQuantity(quantity + 1)}>
                      +
                    </IconButton>
                  </Box>
                  <Typography variant="body1" sx={{ width: "15%" }}>
                    {quantity * 19500}CFA
                  </Typography>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Item>
            </Grid>

            {/* Résumé - Partie droite */}
            <Grid item xs={4}>
              <Item>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Total du panier
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1">
                    Sous-total: {quantity * 19500}CFA
                  </Typography>
                </Box>
                <Divider />
                <Divider />
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Total: {quantity * 19500 + 2000}CFA
                  </Typography>
                </Box>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Valider La Commande
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
