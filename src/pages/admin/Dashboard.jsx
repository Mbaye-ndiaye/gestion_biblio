import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Typography variant="h4">Dashboard</Typography>
        </Box>
      </Box>
    </>
  );
}
