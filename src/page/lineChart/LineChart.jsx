// import React from 'react';

// import { useTheme } from '@mui/material';
import { Box } from "@mui/material";
import Line from "./Line";
import Header from "../../components/Header";

const LineChart = () => {
  // const theme = useTheme();
  return (
    <Box>
      <Header title={"LINE CHART"} subTiitle={"List Of Line Chart"} />

      <Line />
    </Box>
  );
};

export default LineChart;
