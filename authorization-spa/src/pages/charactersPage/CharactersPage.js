import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/";
import { useSelector } from "react-redux";

import api from "../../services/api";

const CharactersPage = () => {
  const [characters, setCharacters] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(characters);

  useEffect(() => {
    if (isAuthenticated) {
      api.session.send({ cmd: "get_list" }, (res) => setCharacters(res));
    }
  }, [isAuthenticated]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     api
  //       .check()
  //       .then((res) => console.log("check", res))
  //       .catch((err) => console.log(err));
  //   }
  // }, [isAuthenticated]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default CharactersPage;
