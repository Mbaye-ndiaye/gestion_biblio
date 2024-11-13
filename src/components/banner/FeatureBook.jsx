import React from 'react';
import { Typography, Box, styled, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Image from "../../assets/image/StockCake.jpg";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 25,
  backgroundColor: "white",
  marginLeft: 0,
  width: 250,
  height: 45,
  marginTop: 30,
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
  marginTop: 5,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: 500,
  display: 'flex',
  alignItems: 'center',
  fontSize: 15,
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 1, 1, 0),
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

export default function FeaturedBook({ searchQuery, setSearchQuery }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant='h3' style={{ color: "white", textAlign: "center" }}>
          Unleash Your Creativity 
          <Typography variant='h3' style={{ color: "white", textAlign: "center" }}>
            With The Power Of A Book
          </Typography> 
        </Typography>
        <Typography variant='h6' style={{ color: "white", textAlign: "center", maxWidth: 600, margin: "auto" }}>
          This should be used to tell a story and allow your users to know a little more about your product or service.
        </Typography>
        <Search>
          <SearchIconWrapper >
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}  // Lier la valeur de l'input à l'état
            onChange={(e) => setSearchQuery(e.target.value)}  // Mettre à jour l'état sur la saisie
          />
        </Search>
      </Box>
    </Box>
  );
}
