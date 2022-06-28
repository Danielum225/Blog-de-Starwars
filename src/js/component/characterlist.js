import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Character from "./character";

const CharacterList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row">
        {store.characters.map((character) => {
          return (
            <Character
              name={character.name}
              uid={character.uid}
              type={"characters"}
            />
          );
        })}
        {store.planets.map((character) => {
          return (
            <Character
              name={character.name}
              uid={character.uid}
              type={"planets"}
            />
          );
        })}
        {store.vehicles.map((character) => {
          return (
            <Character
              name={character.name}
              uid={character.uid}
              type={"vehicles"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
