// import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import Login from "./components/auth/Login/Login";
import { Navigate, Route, Routes } from "react-router";
import Register from "./components/auth/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Members from "./components/Members";
import ProtectedRoutes from "./components/global/ProtectedRoutes";
import PublicRoutes from "./components/global/PublicRoutes";
import GlobalMessage from "./components/global/GlobalMessage";

function App() {
  return (
    <>
      {" "}
      <GlobalMessage />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/members" element={<Members />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
