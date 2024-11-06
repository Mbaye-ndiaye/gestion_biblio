import { useParams } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box, Avatar, Rating, Button, Chip, Stack } from "@mui/material";
import Header from "../../components/navBarUtilisateur/Header";
import FeaturedBook from "../../components/banner/FeatureBook";
import Footer from "../../components/Footer/footer";
import { useSelector } from "react-redux";

const DetailCard = () => {
  const { id } = useParams(); // Récupère l'ID du livre à partir de l'URL
  const books = useSelector((state) => state.books); // Récupère la liste des livres depuis Redux
  
  const book = books.find((b) => b.id === parseInt(id)); // Trouve le livre en fonction de l'ID

  return (
    <Box>
      <Header />
      <FeaturedBook />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 15 }}>
        {book ? (
          <Card sx={{ maxWidth: 900, display: "flex", padding: 3 }}>
            {/* Book Cover */}
            <CardMedia
              component="img"
              sx={{ width: 300, height: "auto", borderRadius: "5px" }}
              image={book.image}
              alt={book.title}
            />
            
            {/* Book Details */}
            <CardContent sx={{ paddingLeft: 4 }}>
              {/* Title */}
              <Typography variant="h4" gutterBottom>
                {book.title}
              </Typography>
              
              {/* Author Info */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar src="/path/to/author/avatar" sx={{ width: 40, height: 40, mr: 2 }} />
                <Typography variant="body1">{book.author}</Typography>
                <Chip label={book.rating} color="primary" sx={{ ml: 2 }} />
              </Box>

              {/* Rating and Reviews */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating name="read-only" value={book.rating} precision={0.5} readOnly />
                <Typography variant="body2">{book.reviews} reviews</Typography>
              </Stack>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 2 }}>
                {book.description}
              </Typography>

              {/* Publisher Information */}
              <Typography variant="subtitle2" color="text.secondary">
                <strong>Pages:</strong> {book.available_copies}p
              </Typography>

              {/* Edition Options */}
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <Chip label="Kindle" clickable variant={book.edition === "Kindle" ? "filled" : "outlined"} />
                <Chip label="Paperback" clickable variant={book.edition === "Paperback" ? "filled" : "outlined"} />
                <Chip label="Hardcover" clickable />
                <Chip label="Audio" clickable />
              </Stack>

              {/* Action Buttons */}
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
