import React from "react";
// import { useAuth } from '../../../hooks/useAuth';

// import AuthNavigation from '../AuthNavigation/AuthNavigation';
// import UserBar from '../UserBar/UserBar';
import { AuthContainer } from "./AuthBar.styled";
import AuthNavigation from "components/AuthNavigation/AuthNavigation";

const AuthBar = ({ name = true }) => {
  // const { isLoggedIn } = useAuth();

  return (
    <AuthContainer>
      {/* {isLoggedIn ? <UserBar name={name} /> : <AuthNavigation />} */}
      <AuthNavigation />
    </AuthContainer>
  );
};

export default AuthBar;
