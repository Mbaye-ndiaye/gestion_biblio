import React, { useState } from "react";
import { Grid, Box, Typography, Modal } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";

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

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
            onClick={handleModalOpen}
          >
            <AddCircleIcon sx={{ fontSize: "35px" }} />
          </Typography>
          <Tables
            headerValues={["Name", "Age", "Country", "Role"]}
            rows={[
              { name: "John Doe", age: 25, country: "USA", role: "Developer" },
              {
                name: "Jane Smith",
                age: 30,
                country: "Canada",
                role: "Designer",
              },
            ]}
          />
        </Box>
      </Box>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box sx={modalStyle}>
          {/* Contenu du modal ici */}
          <Box sx={{ p: 2 }}>
            <Box component="form" noValidate sx={{ mt: 3, maxWidth: 945 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    defaultValue="Ladji"
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
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="contactNumber"
                    label="Contact Number"
                    name="contactNumber"
                    autoComplete="contact-number"
                    defaultValue="787907654"
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
                onClick={handleModalOpen}
              >
                Enregistrer
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
