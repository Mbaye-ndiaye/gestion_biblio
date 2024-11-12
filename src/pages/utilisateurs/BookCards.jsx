// BookCard.jsx
import React from "react";
import { Typography, Button, Card, CardContent, CardMedia, Box, LinearProgress} from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { NavLink } from "react-router-dom";

const BookCard = ({ cover_image, title, id, price, author, total_copies , handleAddToCart }) => {
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
            style={{ height: 250, objectFit: "contain", borderRadius: "5Opx" }}
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
                    <Button
                        variant="contained"
                        startIcon={<ShoppingCartIcon />}
                        color="primary"
                        style={{ marginTop: "15px", fontSize: "10px" }}
                    >
                        Emprunter
                    </Button>
                    <Button onClick={handleAddToCart}
                            variant="outlined"
                            startIcon={<LocalLibraryIcon />}
                            color="primary"
                            style={{ marginTop: "15px", fontSize: "10px" }}
                    >
                        Lire
                    </Button>
                </Box>
        </CardContent>
      </Card>
    );
  };

export default BookCard;
