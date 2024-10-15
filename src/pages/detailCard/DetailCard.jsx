import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
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
    { id: 0, title: "Forbandede yngel", image: Livre1, description: "Description du livre 1" },
    { id: 1, title: "Sund og slank med 5:2", image: Livre2, description: "Description du livre 2" },
    { id: 2, title: "Yahya Hassan", image: Livre3, description: "Description du livre 3" },
    { id: 3, title: "Mat & drikke i CH", image: Livre4, description: "Description du livre 4" },
    { id: 4, title: "Den hemmelige socialdemokrat", image: Livre5, description: "Description du livre 5" },
    { id: 5, title: "Den hemmelige socialdemokrat", image: Livre6, description: "Description du livre 6" },
    { id: 6, title: "Den hemmelige socialdemokrat", image: Livre7, description: "Description du livre 7" },
    { id: 7, title: "Den hemmelige socialdemokrat", image: Livre8, description: "Description du livre 8" },
    { id: 8, title: "Den hemmelige socialdemokrat", image: Livre9, description: "Description du livre 9" },
  ];

  // Trouver le livre avec l'ID correspondant
  const book = books.find((b) => b.id === parseInt(id));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      {book ? (
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="450"
            image={book.image}
            alt={book.title}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {book.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              {book.description}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h5" color="error">
          Livre non trouvé
        </Typography>
      )}
    </Box>
  );
};

export default DetailCard;
