import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../page/lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./Data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          gap={1}
        //   mt={3}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              mb={1}
              mt={1}
              ml={2}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342,32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line isDashboard={true} />
      </Paper>

      <Box
        sx={{
          overflow: "auto",
          minWidth: "280px",
          maxHeight: 383,
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" >
                  {item.txId}
                </Typography>

                <Typography variant="body2">{item.user}</Typography>
              </Box>

              <Typography variant="body1">{item.date}</Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                mr={0.8}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
