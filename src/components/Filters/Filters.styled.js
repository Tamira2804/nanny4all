import styled from "styled-components";
import Select from "react-select";

export const InputSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      width: "226px",
      cursor: "pointer",
      borderRadius: "14px",
      backgroundColor: "var(--accent)",
      color: "var(--colors-title-inverse)",

      padding: "16px 18px",
      border: "none",
      boxShadow: "0px 20px 69px 0px rgba(0, 0, 0, 0.07)",

      fontSize: "var(--fs-lg)",
      appearance: "none",
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      cursor: "pointer",
      color: isFocused ? "var(--colors-title)" : "var(--colors-title-gray)",
      backgroundColor: "var(--colors-bg-primary)",
    }),
    inputLabel: (provided) => ({
      ...provided,
      color: "var(--colors-title)",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
    }),
  },
})`
  & [class$="-menu"] {
    background-color: var(--colors-bg-primary);
    border-radius: 14px;
    border: none;
  }

  & svg,
  & [class$="-singleValue"] {
    color: var(--colors-title-inverse);
  }

  & [class$="-indicatorSeparator"] {
    background-color: transparent;
  }
`;
