// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function SignUp() {
//   return (
//     <div>
//         <NavLink to="/">
//            <h1>Sign Up</h1>
//         </NavLink>

//     </div>
//   )
// }

// export default SignUp
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, Outlet } from "react-router-dom";
// import Image from "../../assets/image/StockCake.jpg"

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0", // Purple color
    },
  },
});

export default function LoginForm() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ border: '#e3f2cb solid', paddingBottom: 5, paddingTop: 3, marginTop: 10, borderRadius: 2, boxShadow: 8 }}>
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
            sx={{ color: "primary.main", fontWeight: "bold", mb: 3 }}
          >
            SIGN UP
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              placeholder="Enter Your Name here"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Number"
              type="number"
              id="number"
              autoComplete="number"
              placeholder="Please Enter Your Number here"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
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
              autoComplete="current-password"
              placeholder="Please Enter Your Password here"
            />
            <NavLink to="/dashboard">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
              >
                Sign up
              </Button>
            </NavLink>

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" sx={{ color: "primary.main" }}>
                Don't have an account? <NavLink to="/">Log in Now</NavLink>
              </Typography>
            </Box>
          </Box>
          <Outlet />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
