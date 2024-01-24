import React from "react";
import RegisterForm from "components/Register/RegisterForm";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 280px;
  height: 479px;
  padding: 28px 12px 28px 12px;
  margin: auto;
  background-color: var(--colors-bg-primary);
  border-radius: 20px;
  border: var(--colors-border-primary);

  @media screen and (min-width: 768px) {
    width: 566px;
    height: 580px;
    padding: 64px;

    border-radius: 30px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

const Title = styled.h1`
  color: var(--colors-title);

  font-size: 40px;
  font-weight: 500;
  line-height: 48px; /* 120% */
  letter-spacing: -0.8px;

  margin-bottom: 20px;
`;

const Text = styled.p`
  color: var(--colors-text);

  font-size: 16px;
  font-weight: 400;
  line-height: 20px; /* 125% */

  margin-bottom: 40px;
`;

const RegisterPage = () => {
  return (
    <Wrapper>
      <Title>Register</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </Text>
      <RegisterForm />
    </Wrapper>
  );
};

export default RegisterPage;
