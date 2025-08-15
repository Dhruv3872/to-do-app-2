// import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import Login from "./components/auth/Login/Login";
import { Navigate, Route, Routes } from "react-router";
import Register from "./components/auth/Register/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
