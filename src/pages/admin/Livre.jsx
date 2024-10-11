import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/card/Table";

export default function Livre() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Tables />
        </Box>
      </Box>
    </>
  );
}
