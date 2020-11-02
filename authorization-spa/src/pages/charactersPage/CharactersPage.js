import React, { useEffect, useState } from "react";
import { CharactersList, Navbar } from "../../components/";
import { useSelector } from "react-redux";

import api from "../../services/api";

const CharactersPage = () => {
  const [characters, setCharacters] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      api.session.send({ cmd: "get_list" }, (res) => setCharacters(res));
    }
  }, [isAuthenticated]);

  const addCharacter = () => {
    api.session.send({
      cmd: "add_in_list",
      data: { name: "NAME", race: "RACE" },
    });
  };

  const editCharacter = () => {
    api.session.send({
      cmd: "edit_in_list",
      data: { id: 5, name: "name" },
    });
  };
  const removeCharacter = () => {
    api.session.send({ cmd: "remove_from_list", data: { id: 5 } });
  };

  return (
    <section className="characters">
      <Navbar />
      {characters && (
        <CharactersList
          characters={characters}
          addCharacter={addCharacter}
          editCharacter={editCharacter}
          removeCharacter={removeCharacter}
        />
      )}
    </section>
  );
};

export default CharactersPage;
