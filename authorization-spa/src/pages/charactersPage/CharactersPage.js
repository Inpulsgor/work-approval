import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

import { LogoutButton } from "../../components";
import api from "../../services/api";

const CharactersPage = () => {
  const [characters, setCharacters] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(characters);

  useEffect(() => {
    const url = "http://testapi.marit.expert:3003";
    const session = io(url, { transports: ["websocket"], cookie: true });

    session.send({ cmd: "get_list" }, function (res) {
      setCharacters(res);
    });
  }, []);

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
