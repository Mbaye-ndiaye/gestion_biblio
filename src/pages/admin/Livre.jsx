import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Modal, TextField, IconButton } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addBook, fetchBooks, updateBook, deleteBook } from "../../actions/Books/bookSlice";

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
  const [isEditMode, setIsEditMode] = useState(false);
  const [editBookId, setEditBookId] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [cover_image, setImageCover] = useState(null);
  const [total_copies, setTotal] = useState("");
  const [available_copies, setAvailable] = useState("");
  const [errors, setErrors] = useState({}); // État pour les messages d'erreur

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks()); // Charger les livres lors du montage du composant
  }, [dispatch]);

  const validateFields = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Le titre est requis";
    if (!author) newErrors.author = "L'auteur est requis";
    if (!category) newErrors.category = "La catégorie est requise";
    if (!description) newErrors.description = "La description est requise";
    if (!price || isNaN(price) || parseFloat(price) <= 0) newErrors.price = "Un prix valide est requis";
    if (!total_copies || isNaN(total_copies) || parseInt(total_copies, 10) <= 0) newErrors.total_copies = "Nombre total valide requis";
    if (!available_copies || isNaN(available_copies) || parseInt(available_copies, 10) < 0) newErrors.available_copies = "Nombre disponible valide requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    if (!validateFields()) return; // Arrête l'enregistrement si la validation échoue

    const newBook = {
      title,
      author,
      category,
      description,
      price: parseFloat(price),
      cover_image,
      total_copies: parseInt(total_copies, 10),
      available_copies: parseInt(available_copies, 10),
    };

    if (isEditMode) {
      const updatedBook = { ...newBook, id: editBookId };
      dispatch(updateBook(updatedBook));
    } else {
      dispatch(addBook(newBook));
    }
    handleModalClose();
  };

  const handleModalOpen = (book = null) => {
    if (book) {
      setIsEditMode(true);
      setEditBookId(book.id);
      setTitle(book.title);
      setAuthor(book.author);
      setCategory(book.category);
      setDescription(book.description);
      setPrice(book.price.toString());
      setImageCover(book.cover_image);
      setTotal(book.total_copies.toString());
      setAvailable(book.available_copies.toString());
    } else {
      setIsEditMode(false);
      setTitle("");
      setAuthor("");
      setCategory("");
      setDescription("");
      setPrice("");
      setImageCover(null);
      setTotal("");
      setAvailable("");
    }
    setErrors({});
    setModalOpen(true);
  };

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
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
            onClick={() => handleModalOpen()} // Ouvre le modal pour ajouter un livre
          >
            <AddCircleIcon sx={{ fontSize: "35px" }} />
          </Typography>
          <Tables
            headerValues={["Id", "Title", "Author", "Category", "Price", "Image", "Total", "Available Copie", "Action"]}
            rows={Array.isArray(books) ? books.map((book) => ({
              id: book.id,
              title: book.title,
              author: book.author,
              category: book.category,
              price: book.price,
              cover_image: (
                <img
                  src={book.cover_image}
                  alt=""
                  style={{ width: "50px", height: "auto", borderRadius: "5px" }}
                />
              ),
              total_copies: book.total_copies,
              available_copies: book.available_copies,
              actions: (
                <Box sx={{ display: "flex" }}>
                  <IconButton onClick={() => handleModalOpen(book)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(book.id)} color="danger">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ),
            })) : []}
          />

        </Box>
      </Box>

      {/* Modal pour Ajouter/Modifier un livre */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box sx={modalStyle}>
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
                  error={!!errors.title}
                  helperText={errors.title}
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
                  error={!!errors.author}
                  helperText={errors.author}
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
                  error={!!errors.category}
                  helperText={errors.category}
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
                  error={!!errors.description}
                  helperText={errors.description}
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
                  error={!!errors.price}
                  helperText={errors.price}
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
                  error={!!errors.total_copies}
                  helperText={errors.total_copies}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="available_copies"
                  label="Available Copies"
                  type="number"
                  value={available_copies}
                  onChange={(e) => setAvailable(e.target.value)}
                  error={!!errors.available_copies}
                  helperText={errors.available_copies}
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
              onClick={handleSave}
            >
              {isEditMode ? "Modifier" : "Enregistrer"}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

