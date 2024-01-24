import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Title,
  Description,
  NannyBlock,
  StyledForm,
  StyledInput,
  ErrorMsg,
} from "./ModalAppointment.styled";
import Button from "components/Button";

const AppointInitialValues = {
  address: "",
  phoneNumber: "",
  childAge: "",
  meetingTime: "",
  email: "",
  parentName: "",
  comment: "",
};

const AppointValidationShema = Yup.object({
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^\+380\d{9}$/, "Invalid phone number")
    .required("Phone number is required"),
  childAge: Yup.string().required("Child's age is required"),
  meetingTime: Yup.string().required("Meeting time is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  parentName: Yup.string().required("Parent's name is required"),
  comment: Yup.string(),
});

const ModalAppointment = ({ onClose }) => {
  const formik = useFormik({
    initialValues: AppointInitialValues,
    validationSchema: AppointValidationShema,
    onSubmit: (values, { resetForm }) => {
      // Дії, які виконуються при вдалому відправленні форми
      console.log("Form submitted:", values);
      onClose();
      resetForm();
    },
  });
  return (
    <div>
      <Title>Make an appointment with a babysitter</Title>
      <Description>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </Description>
      <NannyBlock></NannyBlock>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit(event);
        }}
      >
        <div>
          <StyledInput
            type="text"
            placeholder="Address"
            {...formik.getFieldProps("address")}
          />
          {formik.touched.address && formik.errors.address && (
            <ErrorMsg>{formik.errors.address}</ErrorMsg>
          )}
          <StyledInput
            type="text"
            placeholder="+380"
            {...formik.getFieldProps("phoneNumber")}
          />
        </div>
        <div>
          <StyledInput
            type="text"
            placeholder="Child's age"
            {...formik.getFieldProps("childAge")}
          />
          <StyledInput
            type="text"
            placeholder="00:00"
            {...formik.getFieldProps("meetingTime")}
          />
        </div>
        <StyledInput
          type="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
        <StyledInput
          type="text"
          placeholder="Father's or mother's name"
          {...formik.getFieldProps("parentName")}
        />
        <StyledInput
          type="text"
          placeholder="Comment"
          {...formik.getFieldProps("comment")}
        />
        <Button text="Send" />
      </StyledForm>
    </div>
  );
};

export default ModalAppointment;
