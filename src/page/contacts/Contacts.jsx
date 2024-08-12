// import React from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./Data";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header
        title={"CONTACTS"}
        subTiitle={"List Of Contacts For Future Reference"}
      />

      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Contacts;
