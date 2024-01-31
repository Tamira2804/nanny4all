import styled from "styled-components";
import { Form, Field } from "formik";

export const Title = styled.h1`
  color: var(--colors-title);

  font-size: 40px;
  font-weight: 500;
  line-height: 48px; /* 120% */
  letter-spacing: -0.8px;

  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: var(--colors-text);

  font-size: 16px;
  font-weight: 400;
  line-height: 20px; /* 125% */

  margin-bottom: 40px;
`;

export const StyledForm = styled(Form)``;

export const Label = styled.label`
  position: relative;
`;

const InputStyles = `
  width: 256px;
  height: 52px;

  margin-bottom: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;

  border-radius: 12px;
  border: solid 1px;
  

  outline: none;

  transition: border-color var(--transition);

 &::placeholder {
    color: var(--colors-title);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }

  @media screen and (min-width: 768px) {
    width: 438px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const InputForEmailName = styled(Field)`
  ${InputStyles}

  ${({ error, valid }) => {
    if (error) {
      return `
        padding: 12px 46px 12px 16px;
        border-color: var(--red);
        
      `;
    }
    if (valid) {
      return `
        padding: 12px 46px 12px 16px;
        border-color: var(--colors-border);
       
      `;
    }
    return `
      padding: 12px 16px;  
      border-color: var(--colors-border);
      
    `;
  }}
`;

export const InputForPasswords = styled(Field)`
  ${InputStyles}

  ${({ error, valid }) => {
    if (error) {
      return `
        padding: 12px 74px 12px 16px;
        border-color: var(--red);
                }
      `;
    }
    if (valid) {
      return `
        padding: 12px 74px 12px 16px;
        border-color: var(--colors-border);
        
      `;
    }
    return `
      padding: 12px 46px 12px 16px;  
      border-color: var(--colors-border);
      
    `;
  }}
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: var(--red);
  padding-left: 16px;
`;
