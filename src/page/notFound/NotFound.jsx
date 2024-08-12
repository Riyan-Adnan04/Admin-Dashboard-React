// import React from 'react';

import { Box, Typography, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} variant="h5">
        هـذه الصفحـه غيـر مـوجوده
        <br />
        <br />
       ...الـرجـاء المحـاولـه لاحقـا
      </Typography>
    </Box>
  );
};

export default NotFound;
