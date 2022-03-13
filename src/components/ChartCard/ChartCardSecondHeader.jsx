import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { hideTab, setCurrentTab } from "@/store/tab";
import { TAB } from "@/constants/tab";

const TabButton = styled("div")(({ theme, active }) => ({
  color: active ? theme.palette.grey[800] : "#fff",
  backgroundColor: active ? "#fff" : theme.palette.grey[800],
  cursor: "pointer",
  padding: theme.spacing(1),
  lineHeight: 1
}));

const CustomTabs = () => {
  const currentTab = useSelector((state) => state.tab.currentTab);
  const dispatch = useDispatch();
  const buttons = useMemo(
    () => [
      {
        id: TAB.all,
        icon: <Typography>ALL</Typography>
      },
      { id: TAB.twitter, icon: <TwitterIcon /> },
      { id: TAB.facebook, icon: <FacebookIcon /> },
      { id: TAB.instagram, icon: <InstagramIcon /> },
      { id: TAB.youtube, icon: <YouTubeIcon /> }
    ],
    []
  );

  const handleClick = (tabId) => () => {
    dispatch(setCurrentTab(tabId));
  };

  return (
    <Box display="flex" justifyContent="center">
      {buttons.map((button) => (
        <TabButton
          key={button.id}
          active={currentTab === button.id}
          onClick={handleClick(button.id)}
        >
          {button.icon}
        </TabButton>
      ))}
    </Box>
  );
};

const ChartCardSecondHeader = () => {
  const shouldShow = useSelector((state) => state.tab.shouldShow);
  const dispatch = useDispatch();

  const handleClickHide = () => {
    dispatch(hideTab());
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        backgroundColor: theme.palette.grey[800]
      })}
    >
      <Box flex={1}>
        <CustomTabs />
      </Box>
      <Box sx={{ borderLeft: "1px solid #fff" }}>
        <Button onClick={handleClickHide} sx={{ height: "100%" }}>
          <Typography color="white">HIDE</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ChartCardSecondHeader;
