import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsRefreshing,
  selectIsLoggedIn,
  selectIsLoading,
  selectAuthError,
} from "../redux/auth/authSelectors";

export function useAuth() {
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const authError = useSelector(selectAuthError);

  return {
    user,
    isRefreshing,
    isLoggedIn,
    isLoading,
    authError,
  };
}
