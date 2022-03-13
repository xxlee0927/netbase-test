import { useTheme } from "@emotion/react";
import { Grid, IconButton, Typography } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const ChartCardHeader = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        backgroundColor: theme.palette.primary.main
      }}
    >
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Typography
          variant="h6"
          color="white"
          align="center"
          sx={{ marginLeft: "auto" }}
        >
          CARD
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton sx={{ marginLeft: "auto" }}>
          <QuestionMarkIcon color={theme.palette.primary.dark} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ChartCardHeader;
