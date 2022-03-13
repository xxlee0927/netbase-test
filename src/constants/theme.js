import { yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3e8acc"
    },
    yellow: {
      main: yellow[500]
    }
  }
});

export default theme;
