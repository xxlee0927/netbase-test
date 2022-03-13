import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";

const AlignableTh = styled("th")(({ align }) => ({ textAlign: align }));
const AlignableTd = styled("td")(({ align }) => ({ textAlign: align }));

const PercentageBar = ({ value }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[400],
        position: "relative",
        height: 20
      })}
    >
      <Box
        sx={(theme) => ({
          position: "absolute",
          left: 0,
          top: 0,
          width: `${100 * value}%`,
          height: "100%",
          backgroundColor: theme.palette.yellow.main
        })}
      />
      <Box sx={{ position: "absolute", right: 0, top: 0 }}>{100 * value}%</Box>
    </Box>
  );
};

const BarChartTable = () => {
  const terms = useSelector((state) => state.terms.data);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <AlignableTh align="left">TERMS</AlignableTh>
          <AlignableTh align="center">% OF TOTAL POSTS</AlignableTh>
          <AlignableTh align="right"># OF POSTS</AlignableTh>
        </tr>
      </thead>
      <tbody>
        {terms.map((term) => (
          <tr>
            <td>{term.name}</td>
            <td>
              <PercentageBar value={term.count / 100} />
            </td>
            <AlignableTd align="right">{term.count}</AlignableTd>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BarChartTable;
