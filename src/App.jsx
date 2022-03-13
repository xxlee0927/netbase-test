import "./styles.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import ChartCard from "@/components/ChartCard/ChartCard";
import theme from "@/constants/theme";
import Layout from "@/components/Layout/Layout";
import store from "@/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Layout>
          <ChartCard />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
