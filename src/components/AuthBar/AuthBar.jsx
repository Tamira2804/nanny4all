import React from "react";
import { useAuth } from "../../hooks/useAuth";

import { db, auth } from "../../firebase";
import { ref, get } from "firebase/database";

import UserBar from "../UserBar/UserBar";
import { AuthContainer } from "./AuthBar.styled";
import AuthNavigation from "components/AuthNavigation/AuthNavigation";

const AuthBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AuthContainer>
      {/* {isLoggedIn ? <UserBar name={name} /> : <AuthNavigation />} */}
      {isLoggedIn ? <UserBar /> : <AuthNavigation />}
    </AuthContainer>
  );
};

export default AuthBar;
