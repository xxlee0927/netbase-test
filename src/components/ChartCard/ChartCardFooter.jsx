import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ChartCardFooter = () => {
  return (
    <Box sx={(theme) => ({ backgroundColor: theme.palette.grey[800] })}>
      <Typography variant="h6" color="white" align="center">
        FOOTER
      </Typography>
    </Box>
  );
};

export default ChartCardFooter;
