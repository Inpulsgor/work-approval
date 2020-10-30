import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { LogoutButton } from "../../components";
import api from "../../services/api";

const CharactersPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      api
        .check()
        .then((res) => console.log("check", res))
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated]);

  return (
    <div className="container">
      <LogoutButton />
    </div>
  );
};

export default CharactersPage;
