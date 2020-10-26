import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/icon.svg";

const StartPage = () => {
  return (
    <>
      <section className="start">
        <div className="container">
          <Logo className="logo" />
          <h2 className="title">Who wants to be a millionaire?</h2>
          <Link className="button" to="/game">
            Start
          </Link>
        </div>
      </section>
    </>
  );
};

export default StartPage;
