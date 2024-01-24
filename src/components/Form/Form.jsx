import React, { useState } from "react";

import { Formik, ErrorMessage } from "formik";
import ShowPasswordButton from "components/ShowPasswordButton";
import Button from "components/Button";

import {
  StyledForm,
  Label,
  InputForEmailName,
  InputForPasswords,
  ErrorText,
} from "./Form.styled";

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

const Form = ({ initialValues, schema, handleSubmit, btnTitle }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  //   const [email, setEmail] = useState("");
  //   const [pass, setPass] = useState("");

  const handleValidation = async (values) => {
    try {
      await schema.validate(values, { abortEarly: false });
      setIsFormValid(true);
    } catch (error) {
      setIsFormValid(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
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
            <FormError name="name" />
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
            <FormError name="email" />
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
            <FormError name="password" />
          </Label>

          <Button disabled={!isFormValid} type="submit" text={btnTitle} />
        </StyledForm>
      )}
    </Formik>
    // <div>
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(e) => {
    //       setEmail(e.target.value);
    //     }}
    //     placeholder="Email"
    //   />
    //   <input
    //     type="password"
    //     value={pass}
    //     onChange={(e) => {
    //       setPass(e.target.value);
    //     }}
    //     placeholder="Password"
    //   />
    //   <button onClick={() => handleClick(email, pass)}>{title}</button>
    // </div>
  );
};

export default Form;
