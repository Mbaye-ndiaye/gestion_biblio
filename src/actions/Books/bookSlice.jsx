import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'idle', // Statut de la requête : idle, loading, succeeded, failed
  error: null,
};

// Action pour récupérer les livres depuis l'API
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(process.env.REACT_APP_API_URL + 'books/');
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

  const response = await fetch(process.env.REACT_APP_API_URL + 'books/', {
    method: 'POST',
    body: formData,
  });

  return await response.json();
});

// Action pour mettre à jour un livre
export const updateBook = createAsyncThunk('books/updateBook', async (updatedBook) => {
  const formData = new FormData();

  // Ajouter chaque champ à formData
  formData.append('title', updatedBook.title);
  formData.append('author', updatedBook.author);
  formData.append('category', updatedBook.category);
  formData.append('description', updatedBook.description);
  formData.append('price', updatedBook.price);
  formData.append('cover_image', updatedBook.cover_image); // Fichier image
  formData.append('total_copies', updatedBook.total_copies);
  formData.append('available_copies', updatedBook.available_copies);

  const response = await fetch(process.env.REACT_APP_API_URL + `books/${updatedBook.id}/`, {
    method: 'PUT',
    body: formData,
  });

  return await response.json();
});

// Action pour supprimer un livre
export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  await fetch(process.env.REACT_APP_API_URL + `books/${bookId}/`, {
    method: 'DELETE',
  });

  return bookId; // Retourne l'ID du livre supprimé
});

// Création du slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch books actions
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Add book action
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload); // Ajoute le nouveau livre à l'état
      })
      
      // Update book action
      .addCase(updateBook.fulfilled, (state, action) => {
        const updatedBook = action.payload;
        state.books = state.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        );
      })
      
      // Delete book action
      .addCase(deleteBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        state.books = state.books.filter((book) => book.id !== bookId);
      });
  },
});

// Exporter le reducer
export default booksSlice.reducer;
