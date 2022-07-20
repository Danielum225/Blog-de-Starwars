import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Character from "./character";

const CharacterList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row">
      <h2 className="text-light py-4">Characters</h2>
      <div className="scroll-container d-flex">
        {store.characters.map((character, index) => {
          return (
            <div className="col-12 col-md-3 px-3 characters">
              <Character
                name={character.name}
                uid={character.uid}
                type={"characters"}
                category={"people"}
              />
            </div>
          );
        })}
      </div>
      <h2 className="text-light py-4">Planets</h2>
      <div className="scroll-container d-flex">
        {store.planets.map((character, index) => {
          return (
            <div className="col-12 col-md-3 px-3 characters">
              <Character
                name={character.name}
                uid={character.uid}
                type={"planets"}
                category={"planets"}
              />
            </div>
          );
        })}
      </div>
      <h2 className="text-light py-4">Vehicles</h2>
      <div className="scroll-container d-flex">
        {store.vehicles.map((character, index) => {
          return (
            <div className="col-12 col-md-3 px-3 mb-3">
              <Character
                name={character.name}
                uid={character.uid}
                type={"vehicles"}
                category={"vehicles"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
