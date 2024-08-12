// import React from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./Data";
import Header from "../../components/Header";


const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>

   <Header  title={"INVOICES"} subTiitle={"List Of Invoices Balances"} />


      <DataGrid
        checkboxSelection
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

export default Invoices;
