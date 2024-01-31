import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/authOperations";
import { useAuth } from "../../hooks/useAuth";
import { Wrapper, Typography, Img, Svg, AuthBtn } from "./UserBar.styled";

const UserBar = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());

    // navigate("/login", { replace: true });
  };

  return (
    <Wrapper>
      <Svg>
        <use href={`${sprite}#icon-mdi-user`} />
      </Svg>
      <Typography>{user.name}</Typography>
      <AuthBtn onClick={handleLogout}>Log out</AuthBtn>
    </Wrapper>
  );
};

export default UserBar;
