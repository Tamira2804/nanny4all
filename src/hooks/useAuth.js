import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn } from "../redux/auth/authSelectors";

export function useAuth() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    user,
    isLoggedIn,
  };
}
