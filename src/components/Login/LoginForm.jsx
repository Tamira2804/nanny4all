import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/auth/authSlice";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import { Formik } from "formik";
import * as yup from "yup";

import ShowPasswordButton from "components/ShowPasswordButton";
import ErrorComponent from "components/ErrorComponent";
import Button from "components/Button";

import {
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

const LoginForm = () => {
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

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)

      .catch((error) => {
        console.log("errorCode", error.code);
        console.log("errorMessage", error.message);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleLogin}
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
  );
};

export default LoginForm;
