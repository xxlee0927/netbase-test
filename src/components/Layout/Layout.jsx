import { Box } from "@mui/system";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        minHeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
