import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/icon.svg";

const EndPage = () => {
  return (
    <>
      <section className="end">
        <div className="container">
          <Logo className="logo" />
          <span className="total">Total score:</span>
          <h2 className="titleEnd">$8,000 earned</h2>
          <Link className="button" to="/game">
            Try again
          </Link>
        </div>
      </section>
    </>
  );
};

export default EndPage;
