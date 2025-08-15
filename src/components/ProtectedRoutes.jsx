import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import useAuth from "../services/useAuth";

const ProtectedRoutes = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const { getUser } = useAuth();
  useEffect(() => {
    async function setAuthentication() {
      const user = await getUser();
      if (user) {
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
