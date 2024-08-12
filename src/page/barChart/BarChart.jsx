// import React from 'react';
// import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import Bar from "./Bar";
import Header from "../../components/Header";



const BarChart = () => {
//   const theme = useTheme();
  return (
    <Box>
        <Header  title={"BAR CHART"} subTiitle={"List Of Bar Chart"} />


    <Bar />

    </Box>

   
  );
};

export default BarChart;
