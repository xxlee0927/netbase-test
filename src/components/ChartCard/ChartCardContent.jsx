import { TAB } from "@/constants/tab";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import BarChartTable from "@/components/BarChartTable/BarChartTable";

const ChartCardContent = () => {
  const currentTab = useSelector((state) => state.tab.currentTab);

  if (currentTab === TAB.all) {
    return (
      <div>
        <Box
          sx={(theme) => ({
            position: "sticky",
            padding: theme.spacing(1),
            top: 0,
            backgroundColor: "#fff",
            width: "100%",
            zIndex: 1
          })}
        >
          <Typography
            variant="subtitle2"
            sx={(theme) => ({
              color: theme.palette.grey[600]
            })}
          >
            TOP TERMS
          </Typography>
        </Box>
        <Box pl={1} pr={1} pb={1}>
          <BarChartTable />
        </Box>
      </div>
    );
  }

  return null;
};

export default ChartCardContent;
