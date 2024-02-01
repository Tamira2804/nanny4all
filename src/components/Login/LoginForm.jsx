import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { setUser } from "../../redux/auth/authSlice";

import { Formik } from "formik";
import * as yup from "yup";

import ShowPasswordButton from "components/ShowPasswordButton";
import ErrorComponent from "components/ErrorComponent";
import Button from "components/Button";

import {
  Title,
  Text,
  StyledForm,
  Label,
  InputForEmailName,
  InputForPasswords,
} from "./LoginForm.styled";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Example: user@gmail.com"
    )
    .required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .max(16, "Password must not exceed 16 characters.")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,16}$/,
      "Require 1 uppercase, 1 lowercase, and 1 digit."
    )
    .required("Password is required."),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleValidation = async (values) => {
    try {
      await schema.validate(values, { abortEarly: false });
      setIsFormValid(true);
    } catch (error) {
      setIsFormValid(false);
    }
  };

  const handleLogin = async (values) => {
    console.log("Values", values.email);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const loginedUser = userCredentials.user;
      const newUser = dispatch(
        setUser({
          name: loginedUser.displayName,
          email: loginedUser.email,
          id: loginedUser.uid,
          token: loginedUser.accessToken,
        })
      );
      console.log("newUserLogin", newUser);

      console.log("loginedUser", loginedUser);
      onClose();
    } catch (error) {
      console.error("Помилка логін:", error.message);
    }
  };

  return (
    <>
      <Title>Login</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => handleLogin(values)}
        validate={handleValidation}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <Label>
              <InputForEmailName
                autoComplete="on"
                type="email"
                name="email"
                placeholder="Email"
                error={touched.email && errors.email ? 1 : 0}
                valid={touched.email && !errors.email ? 1 : 0}
              />
              <ErrorComponent name="email" />
            </Label>
            <Label>
              <InputForPasswords
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                error={touched.password && errors.password ? 1 : 0}
                valid={touched.password && !errors.password ? 1 : 0}
              />
              <ShowPasswordButton
                isOpen={passwordVisible}
                onClick={togglePasswordVisibility}
              />
              <ErrorComponent name="password" />
            </Label>

            <Button disabled={!isFormValid} type="submit" text="Login" />
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
