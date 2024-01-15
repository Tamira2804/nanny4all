import React, { Suspense } from "react";
import Header from "components/Header/Header";
import { Container } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
