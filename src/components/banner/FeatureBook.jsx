import React from 'react'
import {  Typography, Box, styled, InputBase  } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import Image from "../../assets/image/StockCake.jpg";




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginLeft: 0,
    width: 250,
    height: 45,
    marginTop: 25,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: 500,
    '& .MuiInputBase-input': {
      padding: theme.spacing(2, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function FeaturedBook () {
 return (
      <Box
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Pour que l'image couvre toute la zone
            backgroundPosition: "center", // Pour centrer l'image de fond
            minHeight: "75vh", // Le box prend au moins toute la hauteur de la fenêtre
            display: "flex",
            justifyContent: "center", // Pour centrer le contenu horizontalement
            alignItems: "center",
          }}
        >
          <Box>
          <Typography variant='h3' style={{ color: "white", textAlign: "center" }}>
          Unleash Your Creativity <Typography variant='h3' style={{ color: "white", textAlign: "center" }}>With The Power Of A Book</Typography> 
          </Typography>
          <Typography variant='h6' style={{ color: "white", textAlign: "center", maxWidth: 600, margin: "auto", }}>
          this should be used to tell a story and allow your users to know a little more about your product or service.
          </Typography>
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Box>)   

  }