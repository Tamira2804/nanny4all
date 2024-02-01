import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import { useDispatch } from "react-redux";

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
      {user && <Typography>{user.displayName}</Typography>}
      <AuthBtn onClick={handleLogout}>Log out</AuthBtn>
    </Wrapper>
  );
};

export default UserBar;
