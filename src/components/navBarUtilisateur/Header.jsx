import React, { useState } from "react";
import CardActionArea from "@mui/material/CardActionArea";
import { AppBar, Drawer, Toolbar, Button, IconButton, Box, Select, CardContent, CardMedia, MenuItem, FormControl, Typography, List, ListItem, ListItemText } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ShoppingCart as ShoppingCartIcon, Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import ImageCard from "../../assets/image/livre1.jpeg";

export default function Header() {
  const [category, setCategory] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // State for mobile menu drawer

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

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 'none', padding: '8px 16px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left section: Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#F97316', padding: '8px', borderRadius: '4px' }}>
              <Typography variant="h6" sx={{ color: 'white' }}>tX</Typography>
            </Box>
            <Typography variant="h6" sx={{ marginLeft: '8px', color: 'black', fontWeight: 'bold' }}>
              Tànkub xam-xam
            </Typography>
          </Box>

          {/* Desktop Menu: Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px', alignItems: 'center' }}>
            <NavLink to="/utilisateur">

            <Button sx={{ color: '#F97316' }}>Home</Button>
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
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="fashion">Fashion</MenuItem>
                <MenuItem value="home-appliances">Home Appliances</MenuItem>
                <MenuItem value="books">Books</MenuItem>
              </Select>
            </FormControl>

            <NavLink to="/emprunts"> 
              <Button sx={{ color: 'black' }}>Emprunte</Button>
            </NavLink>   
            <Button sx={{ color: 'black' }}>Livres</Button>
          </Box>

          {/* Right section: Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

            <IconButton>
              <ShoppingCartIcon sx={{ color: 'black' }} onClick={handleDrawerOpen} />
            </IconButton>

            {/* Login Button */}
            <NavLink to="/">
              <Button variant="outlined" sx={{ color: '#F97316', borderColor: '#F97316' }}>
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
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Emprunte" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Livres" />
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
                  <MenuItem value="electronics">Electronics</MenuItem>
                  <MenuItem value="fashion">Fashion</MenuItem>
                  <MenuItem value="home-appliances">Home Appliances</MenuItem>
                  <MenuItem value="books">Books</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Drawer for Basket */}
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
          {/* Content of the basket */}
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
