import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
} from "./RegisterForm.styled";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters long.")
    .max(16, "Name must not exceed 16 characters.")
    .required("Name is required."),
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
  name: "",
  email: "",
  password: "",
};

const RegisterForm = ({ onClose }) => {
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

  const handleRegister = async (values) => {
    try {
      const actionResult = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = actionResult.user;
      console.log("actionResult.user", actionResult.user);

      await updateProfile(user, {
        displayName: values.name,
      });

      const newUser = dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      console.log("newUser", newUser);

      onClose();
    } catch (error) {
      console.error("Помилка при реєстрації:", error.message);
      if (error.message.includes("already-in-use")) {
        alert("It looks like you are already registered");
      }
    }
  };

  return (
    <>
      <Title>Register</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => handleRegister(values)}
        validate={handleValidation}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <Label>
              <InputForEmailName
                autoComplete="on"
                type="text"
                name="name"
                placeholder="Name"
                error={touched.name && errors.name ? 1 : 0}
                valid={touched.name && !errors.name ? 1 : 0}
              />
              <ErrorComponent name="name" />
            </Label>
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

            <Button disabled={!isFormValid} type="submit" text="Sign Up" />
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
