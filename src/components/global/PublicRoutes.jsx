import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";

const PublicRoutes = () => {
  const username = useSelector((state) => state.user.username);
  return username ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoutes;
