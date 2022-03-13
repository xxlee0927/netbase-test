import { Box } from "@mui/system";
import ChartCardContent from "./ChartCardContent";
import ChartCardFooter from "./ChartCardFooter";
import ChartCardHeader from "./ChartCardHeader";
import ChartCardSecondHeader from "./ChartCardSecondHeader";

const ChartCard = () => {
  return (
    <Box
      sx={{ width: 400, height: 300, display: "flex", flexDirection: "column" }}
    >
      <ChartCardHeader />
      <ChartCardSecondHeader />
      <Box flex={1} overflow="auto">
        <ChartCardContent />
      </Box>
      <ChartCardFooter />
    </Box>
  );
};

export default ChartCard;
