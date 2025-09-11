import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, replace, useNavigate, Navigate } from "react-router";

import { getToken } from "@/services/authService";

import { setLoading } from "@/store/slices/loading/loadingSlice";

const PublicRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getToken();
  // const loading = useSelector((state) => state.loading);
  // const [authenticated, setAuthenticated] = useState(false);
  /*   useEffect(() => {
    dispatch(setLoading(true));
    if (token) {
      // If the token exists, send the user to Dashboard which is a protected route
      // which means that ProtectedLayout component will render first, which takes
      // care of making the `getUser` API call and acting accordingly. All we need to
      // take care here is that if the `getUser` fails, we need to load the public
      // route that called this component to run, which will require storing the current
      // pathname in the store and then navigating to that path in case of the failure
      // to get user.
      // navigate("/dashboard", replace);
    }
    // setLoading(false); // Setting the loading state to false is not needed and
    // should be avoided here because "/dashboard" route will execute the effect
    // of `ProtectedLayout` component which also sets the Loading state to true first
    // and then false later.
  }, []); */
  return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoutes;
