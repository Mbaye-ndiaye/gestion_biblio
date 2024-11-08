import React, { useState, useEffect } from "react";
import { Typography, Button, Card, CardContent, CardMedia, Grid, Box, LinearProgress, Skeleton } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Footer from "../../components/Footer/footer";
import FeatureBook from "../../components/banner/FeatureBook";
import { NavLink } from "react-router-dom";
import Header from "../../components/navBarUtilisateur/Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from '../../actions/Books/bookSlice';

const BookCard = ({ cover_image, title, id, price, author, total_copies }) => {
  const getProgressColor = (total_copies) => {
    if (total_copies > 20) return "success";   
    if (total_copies > 10) return "warning";    
    return "error";                         
  };

  const progressValue = Math.min((total_copies / 50) * 100, 100);

  return (
    <Card style={{ maxWidth: 345, margin: "auto", textAlign: "center", padding: "15px", borderRadius: "10px" }} sx={{ boxShadow: 5 }}>
      <NavLink to={`/DetailCard/${id}`}>
        <CardMedia
          component="img"
          image={cover_image}
          alt={title}
          style={{ height: 250, objectFit: "contain" }}
        />
      </NavLink>
      <CardContent>
        <Typography variant="body1" component="div" style={{ fontSize: "20px", fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box>
          <Typography>by {author}</Typography>
        </Box>
        <Box>
          <Typography>{price} CFA</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="textSecondary">
            {total_copies > 20 ? "Nombreux" : total_copies > 10 ? "Moyen" : "Faible"} ({total_copies} en stock)
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" marginTop={1}>
            <LinearProgress
              variant="determinate"
              value={progressValue}
              sx={{
                height: 10,
                borderRadius: 5,
                width: "80%",
                backgroundColor: "#e0e0e0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: (theme) => theme.palette[getProgressColor(total_copies)].main,
                },
              }}
            />
          </Box>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" startIcon={<ShoppingCartIcon />} color="primary" style={{ marginTop: "15px", fontSize: "10px" }}>
            Emprunter
          </Button>
          <Button variant="outlined" startIcon={<LocalLibraryIcon />} color="primary" style={{ marginTop: "15px", fontSize: "10px" }}>
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
  const [visibleBooks, setVisibleBooks] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchBooks()).then(() => setLoading(false));
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
        {loading
          ? Array.from(new Array(visibleBooks)).map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Skeleton variant="rectangular" width={345} height={250} style={{ marginBottom: 10, borderRadius: "10px" }} />
                <Skeleton width="60%" height={30} />
                <Skeleton width="40%" height={20} />
                <Skeleton width="80%" height={20} style={{ marginTop: 5 }} />
              </Grid>
            ))
          : books.slice(0, visibleBooks).map((book, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <BookCard {...book} />
              </Grid>
            ))}
      </Grid>
      {visibleBooks < books.length && (
        <Box style={{ display: "flex", justifyContent: "center", margin: "auto", width: "150px" }}>
          <Button variant="contained" onClick={loadMoreBooks} color="primary" style={{ height: "50px", borderRadius: "50px" }}>
            Load More
          </Button>
        </Box>
      )}
      <Footer />
    </Box>
  );
}
