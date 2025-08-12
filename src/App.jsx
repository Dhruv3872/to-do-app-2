// import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import Login from "./components/auth/Login/Login";
import { Navigate, Route, Routes } from "react-router";
import Register from "./components/auth/Register/Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Grid
        container
        component="main"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      > */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* </Grid> */}
    </ThemeProvider>
  );
}

export default App;
