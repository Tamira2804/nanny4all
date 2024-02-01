import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import { useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

import { Wrapper, Avatar, Svg, Typography, AuthBtn } from "./UserBar.styled";
import { logOutUser } from "../../redux/auth/authSlice";

const UserBar = () => {
  const dispatch = useDispatch();
  const user = auth.currentUser;

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <Wrapper>
      <Avatar>
        <Svg>
          <use href={`${sprite}#icon-mdi-user`} />
        </Svg>
      </Avatar>
      <Typography>{user.displayName}</Typography>
      <AuthBtn onClick={handleLogout}>Log out</AuthBtn>
    </Wrapper>
  );
};

export default UserBar;
