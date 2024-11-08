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

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks()); // Charger les livres lors du montage du composant
  }, [dispatch]);

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
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
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
            headerValues={["Id", "Title", "Author", "Category", "Description", "Price", "Image", "Total", "Available Copie", "Action"]}
            rows={Array.isArray(books) ? books.map((book) => ({
              ...book,
              actions: (
                <>
                  <Box sx={{ display: "flex"}}>
                    <IconButton onClick={() => handleModalOpen(book)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(book.id)} color="danger">
                      <DeleteIcon />
                    </IconButton>
                  </Box>

                </>
              ),
            })) : []}
          />
        </Box>
      </Box>

      {/* Modal pour Ajouter/Modifier un livre */}
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
                    value={available_copies}
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
                {isEditMode ? "Modifier" : "Enregistrer"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
