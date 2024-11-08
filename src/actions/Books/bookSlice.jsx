import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'idle', // Statut de la requête : idle, loading, succeeded, failed
  error: null,
};

// Action pour récupérer les livres depuis l'API
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch('https://django-render-22s2.onrender.com/api/books/');
  return await response.json();
});

// Action pour ajouter un livre
export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  const formData = new FormData();

  // Ajouter chaque champ à formData
  formData.append('title', newBook.title);
  formData.append('author', newBook.author);
  formData.append('category', newBook.category);
  formData.append('description', newBook.description);
  formData.append('price', newBook.price);
  formData.append('cover_image', newBook.cover_image); // Fichier image
  formData.append('total_copies', newBook.total_copies);
  formData.append('available_copies', newBook.available_copies);

  const response = await fetch('https://django-render-22s2.onrender.com/api/books/', {
      method: 'POST',
      body: formData,
  });

  return await response.json();
});

// Création du slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload; // Met à jour l'état avec les livres récupérés
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload); // Ajoute le nouveau livre à l'état
      });
  },
});

// Exporter le reducer
export default booksSlice.reducer;
