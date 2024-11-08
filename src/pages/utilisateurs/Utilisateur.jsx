
import React, { useState, useEffect } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
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
    const [visibleBooks, setVisibleBooks] = useState(10);

    const handleAddToCart = (book) => {
        dispatch(addItemToCart(book));
    };

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
                        <BookCard {...book} handleAddToCart={() => handleAddToCart(book)} />
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
};

export default BookStore;
