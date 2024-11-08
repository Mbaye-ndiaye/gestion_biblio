// BookCard.jsx
import React from "react";
import { Typography, Button, Card, CardContent, CardMedia, Box, Rating } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { NavLink } from "react-router-dom";

const BookCard = ({ cover_image, title, id, price, handleAddToCart }) => {
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
                    <Button onClick={handleAddToCart}
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

export default BookCard;
