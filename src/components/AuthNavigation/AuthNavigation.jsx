import { AuthBtn } from "./AuthNavigation.styled";

function AuthNavigation() {
  return (
    <>
      <AuthBtn to="/login">Log In</AuthBtn>
      <AuthBtn to="/register">Registration</AuthBtn>
    </>
  );
}

export default AuthNavigation;
