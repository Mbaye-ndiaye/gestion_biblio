import * as React from "react";
import { Box } from "@mui/material";

import Sidebar from "../../components/sidebar/Sidebar";
import CardDash from "../../components/card/Card";

export default function Dashboard() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <CardDash />
        </Box>
      </Box>
    </>
  );
}
