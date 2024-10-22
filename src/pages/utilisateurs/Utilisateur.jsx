import React, { useState } from 'react'
import {  Typography, InputBase, Button, Card, CardContent, CardMedia, Grid, Box, Rating  } from '@mui/material'
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { styled } from '@mui/material/styles';
import Footer from '../../components/Footer/footer';
import Image from "../../assets/image/StockCake.jpg";
// import Livre1 from '../../assets/image/livre9.jpeg' 
import Livre2 from '../../assets/image/livre1.jpeg'
import Livre3 from '../../assets/image/livre2.jpg'
import Livre4 from '../../assets/image/livre3.jpeg'
import Livre5 from '../../assets/image/livre4.jpeg'
import Livre6 from '../../assets/image/livre5.jpeg'
import Livre7 from '../../assets/image/livre6.jpeg'
import Livre8 from '../../assets/image/livre7.jpeg'
import Livre9 from '../../assets/image/livre8.jpeg'
import { NavLink } from 'react-router-dom'
import Header from '../../components/navBarUtilisateur/Header';




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

// Featured Book Component
const FeaturedBook = ({ title, author, description, imageUrl }) => (
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
      </Box>
)



const BookCard = ({ image, id }) => {
  return (
    <Card style={{ maxWidth: 345, margin: 'auto', textAlign: 'center', padding: '10px' }}>
      <NavLink to={`/DetailCard/${id}`}>
        <CardMedia
          component="img"
          image={image} // Remplacez par le chemin de votre image
          alt="Learn Abstract Design"
          style={{ height: 250, objectFit: 'contain' }}
        />
      </NavLink>
      <CardContent>
        <Typography variant="p" component="div">
          Learn Abstract Design
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={1}>
          <Rating name="rating" value={4.5} precision={0.5} readOnly />
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between",  }}>
          <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          color="warning"
          style={{ marginTop: '15px', fontSize: '10px' }}
        >
          emprunter
        </Button>

        <Box>
        <Button
          variant="outlined"
          startIcon={<LocalLibraryIcon />}
          color="warning"
          style={{ marginTop: '15px', fontSize: '10px' }}
        >
          lire
        </Button>
        </Box>
        </Box>
        
      </CardContent>
    </Card>
  );
};

// Main Component
export default function BookStore() {
  const books = [
    { id: 1, title: "Sund og slank med 5:2", image: Livre2 },
    { id: 2, title: "Yahya Hassan", image: Livre3 },
    { id: 3, titre: "Mat & drikke i CH", image: Livre4 },
    { id: 4, titre: "Den hemmelige socialdemokrat", image: Livre5 },
    { id: 5, titre: "Den hemmelige socialdemokrat", image: Livre6 },
    { id: 6, titre: "Den hemmelige socialdemokrat", image: Livre7 },
    { id: 7, titre: "Den hemmelige socialdemokrat", image: Livre8 },
    { id: 8, titre: "Den hemmelige socialdemokrat", image: Livre9 },
    { id: 9, titre: "Den hemmelige socialdemokrat", image: Livre5 },
    { id: 10, titre: "Den hemmelige socialdemokrat", image: Livre6 },
    { id: 11, titre: "Den hemmelige socialdemokrat", image: Livre7 },
    { id: 12, titre: "Den hemmelige socialdemokrat", image: Livre8 },
    { id: 13, titre: "Den hemmelige socialdemokrat", image: Livre9 },
  ];

  // État pour gérer combien de livres sont affichés
  const [visibleBooks, setVisibleBooks] = useState(10);

  // Fonction pour charger plus de livres
  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 8); // Affiche 8 livres de plus
  };

  return (
    <Box>
      <Header/>
      <FeaturedBook />
      <Typography variant="h5" style={{ margin: '20px 0' }}>Nouveaux arrivages</Typography>
      <Grid container spacing={2} sx={{ p: 8 }} columns={12}>
        {books.slice(0, visibleBooks).map((book, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <BookCard {...book} index={index} />
          </Grid>
        ))}
      </Grid>
      {visibleBooks < books.length && (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: "center", margin: "auto", width: "150px"}}>
          <Button variant="contained" onClick={loadMoreBooks} color='warning' style={{ height: "50px", borderRadius: "50px"  }}>
            load more
          </Button>
        </Box>
      )}
      <Footer/>
    </Box>
  );
}
