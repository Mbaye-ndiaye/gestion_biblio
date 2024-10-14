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
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/authActions"; 
import Image from "../../assets/image/StockCake.jpg";
import { NavLink, useNavigate } from "react-router-dom"; 

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
  },
});

export default function SignUp() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    telephone: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // to track registration status
  const navigate = useNavigate(); // to navigate after success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData)); 
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/loginForm"); 
    }
  }, [auth.isAuthenticated, navigate]); 

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            border: "#e3f2cb solid",
            paddingBottom: 3,
            paddingTop: 3,
            borderRadius: 2,
            boxShadow: 8,
            backgroundColor: "#fff",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ color: "primary.main", fontWeight: "bold" }}>
              SIGN UP
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="telephone"
                label="Telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
              >
                Sign up
              </Button>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "primary.main" }}>
                  Don't have an account?{" "}
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
