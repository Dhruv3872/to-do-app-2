// import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import Login from "./components/auth/Login/Login";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router";
import Register from "./components/auth/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Members from "./components/Members/Members";
import ProtectedLayout from "./components/global/ProtectedLayout";
import PublicRoutes from "./components/global/PublicRoutes";
import GlobalMessage from "./components/global/GlobalMessage";

import { setNavigator } from "@/services/navigationService";

function NavigatorSetup() {
  const navigate = useNavigate();
  setNavigator(navigate);
  return null; // To keep it invisible.
}
function App() {
  return (
    <>
      {" "}
      <GlobalMessage />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavigatorSetup />
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<ProtectedLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/members" element={<Members />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
