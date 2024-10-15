import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";

export default function Membres() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Tables
            headerValues={["Nom", "Age", "Pays", "Role", "Action"]}
            rows={[
              {
                name: "Santos",
                age: 24,
                country: "Cap Verd",
                role: "Developer",
                action: "detail",
              },
              {
                name: " Smith",
                age: 30,
                country: "mali",
                role: "Designer",
                action: "detail",
              },
            ]}
          />
        </Box>
      </Box>
    </>
  );
}
