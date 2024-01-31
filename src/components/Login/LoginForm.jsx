import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { logIn } from "../../redux/auth/authOperations";
import { db, auth } from "../../firebase";
import { ref, get } from "firebase/database";

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

  const getUserData = async (userId) => {
    const userDataRef = ref(db, `users/${userId}`);
    const snapshot = await get(userDataRef);

    if (snapshot.exists()) {
      return snapshot.val();
    }

    return null;
  };

  const handleLogin = async ({ email, password }, { resetForm }) => {
    try {
      const actionResult = await dispatch(logIn({ email, password }));
      const {
        meta: { requestStatus },
        payload,
      } = actionResult;

      if (requestStatus === "fulfilled") {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid;
          const userData = await getUserData(userId);

          if (userData) {
            const userName = userData.username;
            console.log("User's name:", userName);
          }
        }
      } else if (requestStatus === "rejected") {
        throw new Error(payload);
      }
    } catch (error) {
      console.error("Помилка логін:", error.message);
    }

    onClose();
    resetForm();
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
    </>
  );
};

export default LoginForm;
