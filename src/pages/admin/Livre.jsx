import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Modal, TextField } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { addBook, fetchBooks } from "../../actions/Books/bookSlice";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  color: "black",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function Livre() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books); // Récupérer les livres de l'état global

  useEffect(() => {
    dispatch(fetchBooks()); // Charger les livres lors du montage du composant
  }, [dispatch]);

  // État pour chaque champ du formulaire
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [cover_image, setImageCover] = useState(null);
  const [total_copies, setTotal] = useState("");
  const [available_copies, setAvailable] = useState("");


  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => {
    setTitle("");
    setAuthor("");
    setCategory("");
    setDescription("");
    setPrice("");
    setImageCover("");
    setTotal("");
    setAvailable("");
    setModalOpen(false);
  };

  const handleSave = () => {
    const newBook = {
      title,
      author,
      category,
      description,
      price: parseFloat(price),
      cover_image, // Contient le fichier image
      total_copies: parseInt(total_copies, 10),
      available_copies: parseInt(available_copies, 10)
    };
  
    // Dispatch pour ajouter le livre dans Redux
    dispatch(addBook(newBook));
    handleModalClose();
  };


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Typography
            sx={{
              float: "right",
              width: "5%",
              textAlign: "center",
              color: "white",
              paddingTop: "7px",
              backgroundColor: "gray",
              borderRadius: "10px",
              marginBottom: 2,
              cursor: "pointer",
            }}
            onClick={handleModalOpen}
          >
            <AddCircleIcon sx={{ fontSize: "35px" }} />
          </Typography>
          <Tables
            headerValues={["Id", "Title", "Author", "Category", "Description", "Price", "Image", "Total", "Available Copie"]}
            rows={Array.isArray(books) ? books : []}
          />

        </Box>
      </Box>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box sx={modalStyle}>
          <Box sx={{ p: 2 }}>
            <Box component="form" noValidate sx={{ mt: 3, maxWidth: 945 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="author"
                    label="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="category"
                    label="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="price"
                    label="Price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="image-cover"
                    name="image-cover"
                    type="file"
                    onChange={(e) => setImageCover(e.target.files[0])}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="total_copies"
                    label="Total"
                    type="number"
                    value={total_copies}
                    onChange={(e) => setTotal(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="available_copies"
                    label="Available_copies"
                    type="number"
                    onChange={(e) => setAvailable(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40%",
                  textAlign: "center",
                  color: "white",
                  paddingY: "10px",
                  backgroundColor: "gray",
                  borderRadius: "10px",
                  cursor: "pointer",
                  marginTop: 3,
                }}
                onClick={handleSave} // Liaison du clic au gestionnaire
              >
                Enregistrer
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
