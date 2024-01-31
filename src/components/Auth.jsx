import React, { useState } from "react";
import { auth } from "firebase/auth";

const AuthProvider = () => {
  const [user, setUser] = useState(auth.currentUser);
  return <div></div>;
};

export default AuthProvider;
