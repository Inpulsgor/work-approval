import React from "react";
import * as Bootstrap from "react-bootstrap";

const Navbar = () => {
  return (
    <Bootstrap.Navbar expand="lg" bg="dark" variant="dark">
      <Bootstrap.Container>
        <Bootstrap.Navbar.Brand href="#">Heroes page</Bootstrap.Navbar.Brand>
        <Bootstrap.Button className="ml-auto" type="button" variant="secondary">
          Logout
        </Bootstrap.Button>
      </Bootstrap.Container>
    </Bootstrap.Navbar>
  );
};

export default Navbar;
