import React from 'react'
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Link, 
  Container, 
  CssBaseline 
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold', mb: 3 }}>
            LOGIN
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: 'none' }}
            >
              Login
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link href="#" variant="body2" sx={{ color: 'primary.main' }}>
                {"If you haven't Register yet ? Register Now"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}