// import React from 'react';

import { Box, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Header = ({title, subTiitle, isDashBoard= false}) => {
    const theme = useTheme();
    return (
       
        <Box mb={ isDashBoard? 3 : 4}>
        <Typography sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
        }}
         variant="h5"
         >
            {title} 
         </Typography>
        <Typography variant="body1">{subTiitle} </Typography>

      </Box>

    );
}

export default Header;
