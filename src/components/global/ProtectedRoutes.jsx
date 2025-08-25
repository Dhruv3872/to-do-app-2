import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import useAuth from "../services/useAuth";
import { useDispatch } from "react-redux";
import { saveUser } from "../store/slices/user/userSlice";

const ProtectedRoutes = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
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
      } else {
        console.log("The user doesn't exist.");
      }
      setLoading(false);
    }
    setAuthentication();
  }, []);
  return loading ? (
    <p>Checking authentication...</p>
  ) : authenticated ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
