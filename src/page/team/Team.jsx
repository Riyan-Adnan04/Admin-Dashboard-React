// import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";

import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();

 

  // field : ضروري كتابتها ليظهر المحتوى
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "name",
      headerName: "الإسم",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "الإيميل",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "العمر",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "رقم الهاتف",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (


          <Box
            sx={{
              p: "5px",
              mb: "3px",
              mt: "9px",
              width: 105,
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",

              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}

            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
  


    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>

       <Header  title={"TEAM"} subTiitle={"Managing The Members"} />


      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Team;
