import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";

export default function Livre() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
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
    </>
  );
}
