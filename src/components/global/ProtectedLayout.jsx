import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "@/services/useAuth";
import { useDispatch } from "react-redux";
import { saveUser } from "@/store/slices/user/userSlice";

import Header from "@/components/global/Header/Header";

const routeTitles = {
  "/dashboard": "My To-Do List",
  "/members": "Members",
};

const ProtectedLayout = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const { getUser } = useAuth();
  useEffect(() => {
    async function setAuthentication() {
      const user = await getUser();
      // alert("456");
      if (user) {
        // alert("123");
        dispatch(saveUser(user));
        setAuthenticated(true);
        console.log("The user exists.");
      }
      setLoading(false);
    }
    setAuthentication();
  }, []);
  const title = routeTitles[location.pathname || "My To-Do List"];
  return loading ? (
    <p>Checking authentication...</p>
  ) : authenticated ? (
    <>
      <Header title={title} />
      <Container
        sx={{ mt: 8 }} // Since the AppBar component's position
        // in the Header component has been fixed, which means that
        // we'll have to provide proper margin to avoid overlap between
        // the Header and the Outlet since the Outlet wouldn't know about
        // the existence of the Header component.
      >
        <Outlet />
      </Container>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedLayout;
