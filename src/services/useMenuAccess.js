import { replace, useNavigate } from "react-router";
import useAuth from "./useAuth";
function useMenuAccess() {
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const validateUser = async () => {
    if (await getUser()) {
      navigate("/dashboard", replace);
    } else {
      navigate("/", replace);
      return false;
    }
  };
  return { validateUser };
}

export default useMenuAccess;
