import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import HotProducts from "../HotProduct/HotProducts";

function Smartphone() {
  return (
    <>
      <Container className="my-3">
        <HotProducts keyword={"smartphone"} />
      </Container>
      <Outlet />
    </>
  );
}

export default Smartphone;
