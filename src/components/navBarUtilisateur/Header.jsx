import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Drawer,
  Toolbar,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
  Select,
  MenuItem,
  FormControl,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ShoppingCart as ShoppingCartIcon, Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { addItemToCart, removeItemFromCart, updateItemQuantity, deleteItemFromCart } from "../../actions/panierSlice/PanierSlice";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Header() {
  const [category, setCategory] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // State for mobile menu drawer

  const itemCount = useSelector((state) => state.cart.itemCount);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileOpen(false);
  };

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const handleDeleteFromCart = (item) => {
    dispatch(deleteItemFromCart(item));
  };

  const handleQuantityChange = (item, event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1) {
      dispatch(updateItemQuantity({ ...item, quantity: value }));
    }
  };

  return (
    <>
        <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 5, padding: '8px 16px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left section: Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'blue', padding: '8px', borderRadius: '4px' }}>
              <Typography variant="h6" sx={{ color: 'white' }}>tX</Typography>
            </Box>
            <Typography variant="h6" sx={{ marginLeft: '8px', color: 'black', fontWeight: 'bold' }}>
              Tànkub xam-xam
            </Typography>
          </Box>

          {/* Desktop Menu: Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px', alignItems: 'center' }}>
            <NavLink to="/utilisateur">

            <Button sx={{ color: 'blue' }}>Home</Button>
            </NavLink>

            {/* Categories Select */}
            <FormControl variant="standard">
              <Select
                value={category}
                onChange={handleCategoryChange}
                displayEmpty
                sx={{ minWidth: 120, color: 'black', borderColor: 'black' }}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <Typography sx={{ color: 'black' }}>Categories</Typography>;
                  }
                  return selected;
                }}
              >
                <MenuItem value="">
                  <em>Categories</em>
                </MenuItem>
                <MenuItem value="histoire">Histoire</MenuItem>
                <MenuItem value="contes">Contes</MenuItem>
                <MenuItem value="romance">Roman</MenuItem>
                <MenuItem value="autre">Autres</MenuItem>
              </Select>
            </FormControl>

            <NavLink to="/emprunts"> 
              <Button sx={{ color: 'black' }}>Emprunte</Button>
            </NavLink>   
          </Box>

          {/* Right section: Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

          <IconButton onClick={handleDrawerOpen}>
                <ShoppingCartIcon sx={{ color: 'white', backgroundColor: 'blue', padding: '7px', borderRadius: '10px' }} />
                {itemCount > 0 && (
                    <Box
                        sx={{
                          position: 'absolute',
                          top: '0px',
                          right: '0px',
                          backgroundColor: 'red',
                          borderRadius: '50%',
                          width: '20px',
                          height: '20px',
                          fontSize: '12px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white',
                        }}
                    >
                      {itemCount}
                    </Box>
                )}
              </IconButton>

            {/* Login Button */}
            <NavLink to="/">
              <Button variant="outlined" sx={{ color: 'blue', borderColor: '#blue' }}>
                <AccountCircleIcon sx={{ marginRight: '8px' }} />
                Login
              </Button>
            </NavLink>

            {/* Mobile Hamburger Menu Icon */}
            <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleMobileMenuOpen}>
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleMobileMenuClose}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleMobileMenuClose}
          onKeyDown={handleMobileMenuClose}
        >
          <List>
            <ListItem button>
            <NavLink to="/utilisateur"> 
              <ListItemText primary="Home" />
              </NavLink>  
            </ListItem>
            <ListItem button>
            <NavLink to="/emprunts"> 
              <ListItemText primary="Emprunte" />
            </NavLink>
            </ListItem>
            <ListItem>
              {/* Categories in Drawer */}
              <FormControl fullWidth>
                <Select
                  value={category}
                  onChange={handleCategoryChange}
                  displayEmpty
                  sx={{ minWidth: 120 }}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <Typography>Categories</Typography>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Categories</em>
                  </MenuItem>
                  <MenuItem value="histoire">Histoire</MenuItem>
                  <MenuItem value="contes">Contes</MenuItem>
                  <MenuItem value="romance">Roman</MenuItem>
                  <MenuItem value="autre">Autres</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </Box>
      </Drawer>

        {/* Drawer for Basket */}
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
          <Box
              sx={{ width: 350 }}
              role="presentation"
              onKeyDown={handleDrawerClose}
          >
            <Typography variant="h6" sx={{ m: 2 }}>
              Mes article
            </Typography>
            {cartItems.length === 0 ? (
                <Typography sx={{ m: 2 }}>Votre panier est vide faut ajouter des article </Typography>
            ) : (
                <List>
                  {cartItems.map((item, index) => (
                      <Card sx={{ display: 'flex', boxShadow: 5, borderRadius: "5px", marginX: '10px', marginY: '10px' }} key={index}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: "50px" }}>
                          <CardMedia
                              component="img"
                              sx={{ width: 100 }}
                              image={item.cover_image}
                              alt="Live from space album cover"
                          />
                          <CardContent>
                            <Typography component="div">
                              {item.title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                sx={{ color: 'text.secondary' }}
                            >
                              {`Price: ${item.quantity * item.price} CFA`}
                            </Typography>
                            <Box
                                sx={{ display: "flex", width: "70%", marginTop: "5px" }}
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
                                  sx={{ width: "90px" }}
                              />
                              <IconButton onClick={() => handleAddToCart(item)}>
                                +
                              </IconButton>
                              <IconButton onClick={() => handleDeleteFromCart(item)}>
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </CardContent>
                        </Box>
                      </Card>
                  ))}
                </List>
            )}
            {cartItems.length > 0 && (
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
                        backgroundColor: "blue",
                        marginLeft: 2,
                        marginRight: 2,
                        marginTop: 5,
                        paddingY: "10px",
                        borderRadius: "10px",
                      }}
                  >
                    Panier
                  </Typography>
                </NavLink>
            )}
          </Box>
        </Drawer>

      </>
  );
}
