import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const Title = styled.h2`
  color: var(--colors-title);

  font-size: 40px;
  font-weight: var(--fw-medium);
  line-height: 48px; /* 120% */
  letter-spacing: -0.8px;
`;

export const Description = styled.p`
  color: rgba(17, 16, 28, 0.5);

  font-size: 16px;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const NannyBlock = styled.div``;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(Field)`
  display: inline-flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  gap: 18px;

  border-radius: 12px;
  border: 1px solid rgba(17, 16, 28, 0.1);
`;

export const ErrorMsg = styled(ErrorMessage)``;
