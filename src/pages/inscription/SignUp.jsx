
// import React from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Container,
//   CssBaseline,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { NavLink, Outlet } from "react-router-dom";
// import Image from "../../assets/image/StockCake.jpg";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#9c27b0", // Purple color
//     },
//   },
// });

// export default function LoginForm() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Box
//         sx={{
//           // Or in your case backgroundImage: "url('images/cover.jpeg')"
//           backgroundImage: `url(${Image})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover", // Pour que l'image couvre toute la zone
//           backgroundPosition: "center", // Pour centrer l'image de fond
//           minHeight: "100vh", // Le box prend au moins toute la hauteur de la fenêtre
//           display: "flex",
//           justifyContent: "center", // Pour centrer le contenu horizontalement
//           alignItems: "center",
//         }}
//       >
//         <Container
//           component="main"
//           maxWidth="xs"
//           sx={{
//             border: "#e3f2cb solid",
//             paddingBottom: 3,
//             paddingTop: 3,
//             // marginTop: 3,
//             borderRadius: 2,
//             boxShadow: 8,
//             backgroundColor: "#fff",
//           }}
//         >
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 5,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Typography
//               component="h1"
//               variant="h4"
//               sx={{ color: "primary.main", fontWeight: "bold" }}
//             >
//               SIGN UP
//             </Typography>
//             <Box component="form" noValidate sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Name"
//                 name="name"
//                 autoComplete="name"
//                 autoFocus
//                 placeholder="Enter Your Name here"
//               />
//               <TextField
              
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="number"
//                 label="Number"
//                 type="number"
//                 id="number"
//                 autoComplete="number"
//                 placeholder="Please Enter Your Number here"
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 placeholder="Enter Your Email here"
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 placeholder="Please Enter Your Password here"
//               />
//               <NavLink to="/dashboard">
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2, textTransform: "none" }}
//                 >
//                   Sign up
//                 </Button>
//               </NavLink>

//               <Box sx={{ textAlign: "center" }}>
//                 <Typography variant="body2" sx={{ color: "primary.main" }}>
//                   Don't have an account? <NavLink to="/">Log in Now</NavLink>
//                 </Typography>
//               </Box>
//             </Box>
//             <Outlet />
//           </Box>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// }


import React, { useState } from "react";
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
import Image from "../../assets/image/StockCake.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { register } from "../../actions/authActions"; // import the register action

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
  const auth = useSelector((state) => state.auth); // Get auth state from Redux

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the register action
    dispatch(register(formData));
  };

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
                label="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="telephone"
                label="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
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
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
