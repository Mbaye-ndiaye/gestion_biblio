import React from 'react'
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container, 
  CssBaseline 
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { NavLink, Outlet } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0', // Purple color
    },
  },
})

export default function LoginForm() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ border: '#e3f2cb solid', paddingBottom: 10, paddingTop: 3, marginTop: 15, borderRadius: 2, boxShadow: 8 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            LOG IN
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
              sx={{ mt: 3, mb: 2, textTransform: 'none' }}
            >
              Login
            </Button>
            </NavLink>
            
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'primary.main' }}>
                Don't have an account? <NavLink to="/sign-up">Sign Up</NavLink>
              </Typography>
            </Box>
          </Box>
          <Outlet/>
        </Box>
      </Container>
    </ThemeProvider>
  )
}