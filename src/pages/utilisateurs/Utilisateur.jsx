import React, { useState, useEffect } from "react";
import { Typography, Button, Grid, Box, Skeleton } from "@mui/material";
import Footer from "../../components/Footer/footer";
import { addItemToCart } from '../../actions/panierSlice/PanierSlice';
import FeatureBook from "../../components/banner/FeatureBook";
import Header from "../../components/navBarUtilisateur/Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from '../../actions/Books/bookSlice';
import BookCard from './BookCards';

const BookStore = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [visibleBooks, setVisibleBooks] = useState(8);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // État pour la recherche

  useEffect(() => {
    if (books.length === 0) {
      setLoading(true);
      dispatch(fetchBooks()).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, books.length]);

  const handleAddToCart = (book) => {
    dispatch(addItemToCart(book));
  };

  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 8);
  };

  // Filtrer les livres en fonction de la recherche
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filtre sur le titre du livre
  );

  return (
    <Box>
      <Header />
      <FeatureBook searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Typography variant="h5" style={{ margin: "20px 0" }}>
        Nouveaux arrivages
      </Typography>
      <Grid container spacing={2} sx={{ p: 8 }} columns={12}>
        {loading
          ? Array.from(new Array(visibleBooks)).map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Skeleton variant="rectangular" width={345} height={250} style={{ marginBottom: 10, borderRadius: "10px" }} />
                <Skeleton width="60%" height={30} />
                <Skeleton width="40%" height={20} />
                <Skeleton width="80%" height={20} style={{ marginTop: 5 }} />
              </Grid>
            ))
          : filteredBooks.slice(0, visibleBooks).map((book, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <BookCard {...book} handleAddToCart={() => handleAddToCart(book)} />
              </Grid>
            ))}
      </Grid>

      {visibleBooks < filteredBooks.length && (
        <Box style={{ display: "flex", justifyContent: "center", margin: "auto", width: "150px" }}>
          <Button variant="contained" onClick={loadMoreBooks} color="primary" style={{ height: "50px", borderRadius: "50px" }}>
            Load More
          </Button>
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default BookStore;
