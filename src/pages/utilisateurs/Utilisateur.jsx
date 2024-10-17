import React from "react";
import {
  Typography,
  InputBase,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import {
  Search as SearchIcon, 
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Image from "../../assets/image/StockCake.jpg";
import Livre1 from "../../assets/image/livre9.jpeg";
import Livre2 from "../../assets/image/livre1.jpeg";
import Livre3 from "../../assets/image/livre2.jpg";
import Livre4 from "../../assets/image/livre3.jpeg";
import Livre5 from "../../assets/image/livre4.jpeg";
import Livre6 from "../../assets/image/livre5.jpeg";
import Livre7 from "../../assets/image/livre6.jpeg";
import Livre8 from "../../assets/image/livre7.jpeg";
import Livre9 from "../../assets/image/livre8.jpeg";
import { NavLink } from "react-router-dom";
import Header from "../../components/navBarUtilisateur/Header";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginLeft: 0,
  width: 250,
  height: 45,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: 500,
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
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
      minHeight: "67vh", // Le box prend au moins toute la hauteur de la fenêtre
      display: "flex",
      justifyContent: "center", // Pour centrer le contenu horizontalement
      alignItems: "center",
    }}
  >
    <Box>
      <Typography>sdfghjklmlkjhfds</Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  </Box>
);

// Book Card Component
const BookCard = ({ title, image, index }) => (
  <Card>
    <NavLink to={`/DetailCard/${index}`}>
      <CardMedia
        component="img"
        height="350"
        width="300"
        image={image}
        alt={title}
      />
    </NavLink>
    <CardContent>
      <Typography variant="body2">{title}</Typography>
    </CardContent>
  </Card>
);

// Main Component
export default function BookStore() {
  const books = [
    { title: "Forbandede yngel", image: Livre1 },
    { title: "Sund og slank med 5:2", image: Livre2 },
    { title: "Yahya Hassan", image: Livre3 },
    { title: "Mat & drikke i CH", image: Livre4 },
    { title: "Den hemmelige socialdemokrat", image: Livre5 },
    { title: "Den hemmelige socialdemokrat", image: Livre6 },
    { title: "Den hemmelige socialdemokrat", image: Livre7 },
    { title: "Den hemmelige socialdemokrat", image: Livre8 },
    { title: "Den hemmelige socialdemokrat", image: Livre9 },
  ];

  return (
    <div>
      <Header />
      <FeaturedBook
        title="Western Canada"
        author="Jack Altman"
        description="From the ocean-and-mountain backdrop of Vancouver to the exciting landscapes of the Rockies, from the flower gardens of Victoria to Alberta's barren Badlands."
        imageUrl="/placeholder.svg?height=400&width=800"
      />
      <Typography variant="h5" style={{ margin: "20px 0" }}>
        New arrivals
      </Typography>
      <Grid container spacing={2} sx={{ p: 8 }}>
        {books.map((book, index) => (
          <Grid item md={2} xs={5} sm={6} key={index}>
            <BookCard {...book} index={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
