import React from "react";
import styled from "styled-components";

const CircleAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 20px;
  font-weight: var(--fw-medium);
  line-height: 20px; /* 100% */
`;

const ReviewAvatar = ({ name }) => {
  const initials = name ? name.charAt(0).toUpperCase() : "";

  return <CircleAvatar>{initials}</CircleAvatar>;
};

export default ReviewAvatar;
