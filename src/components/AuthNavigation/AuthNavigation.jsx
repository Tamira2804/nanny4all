import React, { useState } from "react";
import { AuthBtn } from "./AuthNavigation.styled";
import Modal from "components/Modal";
import LoginForm from "components/Login/LoginForm";
import RegisterForm from "components/Register/RegisterForm";

function AuthNavigation() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const openLogin = () => {
    setIsOpenLogin(true);
  };

  const closeLogin = () => {
    setIsOpenLogin(false);
  };

  const openRegister = () => {
    setIsOpenRegister(true);
  };

  const closeRegister = () => {
    setIsOpenRegister(false);
  };
  return (
    <>
      <AuthBtn onClick={openLogin}>Log In</AuthBtn>
      <AuthBtn onClick={openRegister}>Registration</AuthBtn>
      {isOpenLogin && (
        <Modal onClose={closeLogin} isOpenModal={isOpenLogin}>
          <LoginForm onClose={closeLogin} />
        </Modal>
      )}
      {isOpenRegister && (
        <Modal onClose={closeRegister} isOpenModal={isOpenRegister}>
          <RegisterForm onClose={closeRegister} />
        </Modal>
      )}
    </>
  );
}

export default AuthNavigation;
