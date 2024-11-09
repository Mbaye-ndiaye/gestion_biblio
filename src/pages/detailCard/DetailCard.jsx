import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box, Avatar, Rating, Button, Stack, Skeleton } from "@mui/material";
import Header from "../../components/navBarUtilisateur/Header";
import FeaturedBook from "../../components/banner/FeatureBook";
import Footer from "../../components/Footer/footer";
import { useSelector } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const DetailCard = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook de navigation

  useEffect(() => {
    if (books.length > 0) {
      setLoading(false);
    }
  }, [books]);

  const book = Array.isArray(books) ? books.find((b) => b.id === parseInt(id)) : null;

  return (
    <Box>
      <Header />
      <FeaturedBook />
       {/* Button for navigating back */}
       <Box sx={{ display: "flex", ml: 44,  mt: 5 }}>
        <Button variant="outlined" onClick={() => navigate(-1)}><ArrowBackIcon/></Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 15 }}>
        {loading ? (
          // Skeleton Loader
          <Card sx={{ maxWidth: 900, display: "flex", padding: 5, boxShadow: 5 }}>
            <Skeleton variant="rectangular" width={300} height={250} sx={{ borderRadius: "5px" }} />
            <CardContent sx={{ paddingLeft: 4, flex: 1 }}>
              <Skeleton variant="text" width="60%" height={40} />
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Skeleton variant="circular" width={40} height={40} sx={{ mr: 2 }} />
                <Skeleton variant="text" width="30%" />
              </Box>
              <Skeleton variant="text" width="50%" height={20} />
              <Skeleton variant="text" width="80%" height={80} sx={{ mt: 2 }} />
              <Skeleton variant="text" width="40%" />
              <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                <Skeleton variant="rectangular" width={100} height={40} />
                <Skeleton variant="rectangular" width={100} height={40} />
              </Box>
            </CardContent>
          </Card>
        ) : book ? (
          <Card sx={{ maxWidth: 900, display: "flex", padding: 5, boxShadow: 5 }}>
            <CardMedia
              component="img"
              sx={{ width: 300, height: "auto", borderRadius: "5px" }}
              image={book.cover_image}
              alt={book.title}
              style={{ height: 250, objectFit: "contain" }}
            />
            <CardContent sx={{ paddingLeft: 4 }}>
              <Typography variant="h4" gutterBottom>
                {book.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar src="/path/to/author/avatar" sx={{ width: 40, height: 40, mr: 2 }} />
                <Typography variant="body1">{book.author}</Typography>
              </Box>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating name="read-only" value={book.rating} precision={0.5} readOnly />
                <Typography variant="body2">{book.reviews} reviews</Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 2 }}>
                {book.description}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                <strong>Pages:</strong> {book.available_copies}p
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>Add to read</Button>
                <Button variant="outlined">Preview</Button>
              </Box>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h5" color="error">
            Livre non trouvé
          </Typography>
        )}
      </Box>

     
      <Footer />
    </Box>
  );
};

export default DetailCard;
