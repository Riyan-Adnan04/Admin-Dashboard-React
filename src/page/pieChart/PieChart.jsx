// import React from 'react';

import { Box } from "@mui/material";
import Pie from "./Pie";
import Header from "../../components/Header";

const PieChart = () => {
  return (
    <Box>
      <Header title={"PIE CHART"} subTiitle={"List Of Pie Chart"} />

      <Pie />
    </Box>
  );
};

export default PieChart;
