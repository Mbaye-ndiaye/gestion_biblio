import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const ProfileContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  paddingTop: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  marginBottom: theme.spacing(2),
  marginTop: -theme.spacing(7.5),
  border: `3px solid ${theme.palette.background.paper}`,
}));

export default function ProfilePage() {
  return (
    <Box sx={{ height: "110vh", backgroundColor: "#f5f5f5" }}>
      <Box
        sx={{
          backgroundColor: "#9c27b0",
          height: "25vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" color="white">
          Mon Profile
        </Typography>
      </Box>
      <Box
        sx={{
          // backgroundColor: "red",
          height: "65vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileContainer
          maxWidth="sm"
          sx={{
            backgroundColor: "#fff",
          }}
        >
          <ProfileAvatar alt="User Name" src="/path/to/profile-picture.jpg" />
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  defaultValue="Ladji"
                  InputLabelProps={{
                    sx: {
                      color: "#9c27b0",
                      "&.Mui-focused": {
                        color: "#9c27b0",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  defaultValue="Timera"
                  InputLabelProps={{
                    sx: {
                      color: "#9c27b0",
                      "&.Mui-focused": {
                        color: "#9c27b0",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  defaultValue="tims7788@gmail.com"
                  InputLabelProps={{
                    sx: {
                      color: "#9c27b0",
                      "&.Mui-focused": {
                        color: "#9c27b0",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  defaultValue="mbao"
                  InputLabelProps={{
                    sx: {
                      color: "#9c27b0",
                      "&.Mui-focused": {
                        color: "#9c27b0",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  name="contactNumber"
                  autoComplete="contact-number"
                  defaultValue="787907654"
                  InputLabelProps={{
                    sx: {
                      color: "#9c27b0",
                      "&.Mui-focused": {
                        color: "#9c27b0",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  defaultValue="sbdfbnd65sfvdb s"
                  InputLabelProps={{
                    sx: {
                      color: "#9c27b0",
                      "&.Mui-focused": {
                        color: "#9c27b0",
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
                mb: 5,
              }}
            >
              <Button variant="outlined" color="secondary">
                Retour
              </Button>
              <Button sx={{ backgroundColor: "#9c27b0", color: "white" }}>
                Enregistrer
              </Button>
            </Box>
          </Box>
        </ProfileContainer>
      </Box>
    </Box>
  );
}
