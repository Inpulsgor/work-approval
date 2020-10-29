import React, { useEffect } from "react";
import { LogoutButton } from "../../components";
import api from "../../services/api";

const CharactersPage = () => {
  useEffect(() => {
    api
      .check()
      .then((res) => console.log("check", res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <LogoutButton />
    </div>
  );
};

export default CharactersPage;
