// import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import { Typography } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>I would like to buy a hamburger.</Typography>
    </ThemeProvider>
  );
}

export default App;
