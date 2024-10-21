import { useParams } from 'react-router-dom';
// import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Card, CardMedia, CardContent, Typography, Box, Avatar, Rating, Button, Chip, Stack } from '@mui/material';
// import Livre1 from '../../assets/image/livre9.jpeg';
import Livre1 from '../../assets/image/livre9.jpeg';
import Livre2 from '../../assets/image/livre1.jpeg';
import Livre3 from '../../assets/image/livre2.jpg';
import Livre4 from '../../assets/image/livre3.jpeg';
import Livre5 from '../../assets/image/livre4.jpeg';
import Livre6 from '../../assets/image/livre5.jpeg';
import Livre7 from '../../assets/image/livre6.jpeg';
import Livre8 from '../../assets/image/livre7.jpeg';
import Livre9 from '../../assets/image/livre8.jpeg';



const DetailCard = () => {
  const { id } = useParams(); // Récupère l'ID du livre à partir de l'URL
  const books = [
    { id: 0, title: "Forbandede yngel", image: Livre1, description: "Description du livre 1", author: "Author 1", rating: 4.5, reviews: 7569, publishDate: "December 30th 2014", isbn: "97818022396", language: "English", pages: 240, edition: "Kindle" },
    { id: 1, title: "Sund og slank med 5:2", image: Livre2, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 2, title: "Sund og slank med 5:2", image: Livre3, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 3, title: "Sund og slank med 5:2", image: Livre4, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 4, title: "Sund og slank med 5:2", image: Livre5, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 5, title: "Sund og slank med 5:2", image: Livre6, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 6, title: "Sund og slank med 5:2", image: Livre7, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 7, title: "Sund og slank med 5:2", image: Livre8, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 8, title: "Sund og slank med 5:2", image: Livre9, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 9, title: "Sund og slank med 5:2", image: Livre2, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 10, title: "Sund og slank med 5:2", image: Livre2, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
    { id: 11, title: "Sund og slank med 5:2", image: Livre2, description: "Description du livre 2", author: "Author 2", rating: 4.0, reviews: 6578, publishDate: "November 10th 2013", isbn: "9781834567", language: "English", pages: 300, edition: "Paperback" },
  ];

  // Find the book by its ID
  const book = books.find((b) => b.id === parseInt(id));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 20 }}>
      {book ? (
        <Card sx={{ maxWidth: 900, display: 'flex', padding: 3 }}>
          {/* Book Cover */}
          <CardMedia
            component="img"
            sx={{ width: 300, height: 'auto', borderRadius: '5px' }}
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
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
            <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2 }}>
              <strong>Publisher:</strong> Thomas Nelson Inc.
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <strong>First Publish:</strong> {book.publishDate}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <strong>ISBN:</strong> {book.isbn}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <strong>Language:</strong> {book.language}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <strong>Pages:</strong> {book.pages}p
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
  );
}
export default DetailCard;
