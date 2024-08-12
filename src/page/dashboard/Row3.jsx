import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../page/pieChart/Pie";
import Bar from "../../page/barChart/Bar";
import Geo from "../../page/geography/Geo";

const Row3 = () => {
    const theme = useTheme();
    return (
       <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={2}>

        <Paper sx={{flexGrow: 1, minWidth: "350px", width: "28%"}}>
            <Typography
            color={theme.palette.secondary.main}
            sx={{padding: "30px 30px 0 30px"}}
            variant="h6"
            fontWeight="600">
                Compain
            </Typography>

            <Pie isDashboard ={true} />

            <Typography variant="h6" align="center" sx={{mt: "15px"}}>
                $48,352 Revenue Generated
            </Typography>

            <Typography variant="body2" px={0.7} pb={3} align="center">
                Includes Extra Misc Expenditures And Costs
            </Typography>




        </Paper>

        <Paper sx={{flexGrow: 1, minWidth: "350px", width: "28%"}}>

        <Typography
            color={theme.palette.secondary.main}
            sx={{padding: "30px 30px 0 30px"}}
            variant="h6"
            fontWeight="600">
                Sales Quantity
            </Typography>


            <Bar isDashboard = {true} />


        </Paper>

        
        <Paper sx={{flexGrow: 1, minWidth: "350px", width: "28%"}}>

        <Geo isDashboard = {true} />


        </Paper>




       </Stack>
    );
}

export default Row3;
