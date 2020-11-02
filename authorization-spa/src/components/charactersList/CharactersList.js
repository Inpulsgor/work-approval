import React from "react";
import * as Bootstrap from "react-bootstrap";

const CharactersList = ({ characters }) => {
  console.log("characters", characters);
  return (
    <Bootstrap.Container>
      <Bootstrap.Row
        fluid="sm"
        xs={1}
        md={1}
        lg={4}
        className="d-flex justify-content-between"
      >
        {characters.map((character) => {
          return (
            <Bootstrap.Col key={character.id} className="column">
              <h2 className="column__title">{character.race}</h2>
              <Bootstrap.Row>
                <span className="column__name">{character.name}</span>
                <Bootstrap.Button
                  data-attr={character.race}
                  variant="secondary"
                >
                  Add
                </Bootstrap.Button>
                <Bootstrap.Button variant="danger">Delete</Bootstrap.Button>
              </Bootstrap.Row>
            </Bootstrap.Col>
          );
        })}
      </Bootstrap.Row>
    </Bootstrap.Container>
  );
};

export default CharactersList;
