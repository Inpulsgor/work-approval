import React from "react";
import * as Bootstrap from "react-bootstrap";

const Navbar = () => {
  return (
    <Bootstrap.Navbar bg="dark" variant="dark">
      <Bootstrap.Container>
        <Bootstrap.Navbar.Brand href="#">Navbar</Bootstrap.Navbar.Brand>
      </Bootstrap.Container>
    </Bootstrap.Navbar>
  );
};

export default Navbar;
