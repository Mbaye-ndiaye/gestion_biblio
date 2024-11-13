import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider, List,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Header from "../../../components/navBarUtilisateur/Header";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, deleteItemFromCart, removeItemFromCart} from "../../../actions/panierSlice/PanierSlice";

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
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const handleDeleteFromCart = (item) => {
    dispatch(deleteItemFromCart(item));
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <Box sx={{ backgroundColor: "gray", height: "110vh"  }}>
      <Header />
      <Box sx={{ marginTop: 12,   }}>
        {cartItems.length === 0 ? (
            <Typography sx={{ paddingTop: 20, textAlign: 'center', fontSize: '30px' , color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Votre panier est vide faut ajouter des article </Typography>
        ) : (
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Mes Article
                </Typography>

                    <List>
                      {cartItems.map((item, index) => (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: "50px", width: '100%', mb: 4 }} key={index}>
                              <img
                                  style={{ width: 100, marginRight: '26px' }}
                                  src={item.cover_image}
                                  alt="Live from space album cover"
                              />
                              <box sx={{ flexGrow: 1, }}>
                                <Typography variant="body1">
                                  {item.title}
                                </Typography>
                              </box>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.secondary' }}
                                >
                                  {`Price: ${ item.price} CFA`}
                                </Typography>
                                <Box
                                    sx={{ display: "flex", width: "35%", alignItems: 'center' , marginRight: '20px'}}
                                >
                                  <IconButton
                                      onClick={() => handleRemoveFromCart(item)}
                                  >
                                    -
                                  </IconButton>
                                  <TextField
                                      value={item.quantity}
                                      onChange={(e) => handleQuantityChange(item, e)}
                                      inputProps={{ min: 1, style: { textAlign: "center" } }}
                                      sx={{ width: "50px" }}
                                  />
                                  <IconButton onClick={() => handleAddToCart(item)}>
                                    +
                                  </IconButton>
                                  <IconButton onClick={() => handleDeleteFromCart(item)} sx={{ marginLeft: '20px', marginRight: '20px'}}>
                                    <DeleteIcon />
                                  </IconButton>

                                  <Typography
                                      variant="body1"
                                      sx={{ color: 'text.secondary' }}
                                  >
                                    {`Price: ${item.quantity * item.price} CFA`}
                                  </Typography>
                                </Box>
                            </Box>
                      ))}
                    </List>

              </Item>
            </Grid>


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
        )}
      </Box>
    </Box>
  );
}
