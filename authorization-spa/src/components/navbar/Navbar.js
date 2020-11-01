import React from "react";
import * as Bootstrap from "react-bootstrap";

const Navbar = () => {
  return (
    <Bootstrap.Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Bootstrap.Container>
        <Bootstrap.Navbar.Brand href="#">Heroes app</Bootstrap.Navbar.Brand>
        <Bootstrap.Button
          className="ml-auto"
          type="button"
          variant="outline-primary"
        >
          Logout
        </Bootstrap.Button>
      </Bootstrap.Container>
    </Bootstrap.Navbar>
  );
};

export default Navbar;
