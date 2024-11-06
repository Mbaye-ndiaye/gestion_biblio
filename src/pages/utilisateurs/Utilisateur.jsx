import React, { useState, useEffect } from "react";
import { Typography, Button, Card, CardContent, CardMedia, Grid, Box, Rating } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Footer from "../../components/Footer/footer";
import FeatureBook from "../../components/banner/FeatureBook";
import { NavLink } from "react-router-dom";
import Header from "../../components/navBarUtilisateur/Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from '../../actions/Books/bookSlice';

const BookCard = ({ cover_image, title, id, price }) => {
  return (
    <Card style={{ maxWidth: 345, margin: "auto", textAlign: "center", padding: "10px" }}>
      <NavLink to={`/DetailCard/${id}`}>
        <CardMedia
          component="img"
          image={cover_image}
          alt={title}
          style={{ height: 250, objectFit: "contain" }}
        />
      </NavLink>
      <CardContent>
        <Typography variant="body1" component="div">
          {title}
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={1}>
          <Rating name="rating" value={4.5} precision={0.5} readOnly />
        </Box>
        <Box>
          <Typography>
            {price}cfa
          </Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            color="warning"
            style={{ marginTop: "15px", fontSize: "10px" }}
          >
            Emprunter
          </Button>
          <Button
            variant="outlined"
            startIcon={<LocalLibraryIcon />}
            color="warning"
            style={{ marginTop: "15px", fontSize: "10px" }}
          >
            Ajout
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function BookStore() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [visibleBooks, setVisibleBooks] = useState(10);

    // Fetch books on component mount
    useEffect(() => {
      dispatch(fetchBooks());
    }, [dispatch]);

  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 8);
  };

  return (
    <Box>
      <Header />
      <FeatureBook />
      <Typography variant="h5" style={{ margin: "20px 0" }}>
        Nouveaux arrivages
      </Typography>
      <Grid container spacing={2} sx={{ p: 8 }} columns={12}>
        {books.slice(0, visibleBooks).map((book, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <BookCard {...book} index={index} />
          </Grid>
        ))}
      </Grid>
      {visibleBooks < books.length && (
        <Box style={{ display: "flex", justifyContent: "center", margin: "auto", width: "150px" }}>
          <Button variant="contained" onClick={loadMoreBooks} color="warning" style={{ height: "50px", borderRadius: "50px" }}>
            Load More
          </Button>
        </Box>
      )}
      <Footer />
    </Box>
  );
}
