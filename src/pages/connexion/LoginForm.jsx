import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Image from "../../assets/image/StockCake.jpg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";


// import { Password } from "@mui/icons-material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0", // Purple color
    },
  },
});

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  }

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(login(formData))

}
useEffect(() => {
  if (auth.isAuthenticated) {
    navigate("/dashboard");
  } else if (auth.error) {
    setErrorMessage(auth.error);
  }
}, [auth.isAuthenticated, auth.error, navigate]);



  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Pour que l'image couvre toute la zone
          backgroundPosition: "center", // Pour centrer l'image de fond
          minHeight: "100vh", // Le box prend au moins toute la hauteur de la fenêtre
          display: "flex",
          justifyContent: "center", // Pour centrer le contenu horizontalement
          alignItems: "center",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            border: "#e3f2cb solid",
            paddingBottom: 10,
            paddingTop: 3,
            marginTop: 15,
            borderRadius: 2,
            boxShadow: 8,
            backgroundColor: "#fff",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{ color: "primary.main", fontWeight: "bold" }}
            >
              LOG IN
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
                placeholder="Enter Your Email here"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                placeholder="Please Enter Your Password here"
              />
              
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, textTransform: "none" }}
                >
                  Login
                </Button>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "primary.main" }}>
                  Don't have an account?{" "}
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </Typography>
              </Box>
            </Box>
            <Outlet />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
