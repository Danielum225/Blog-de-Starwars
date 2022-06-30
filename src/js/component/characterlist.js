import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Character from "./character";

const CharacterList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row">
      <h2 className="text-danger py-4">Characters</h2>
      <div className="scroll-container d-flex">
        {store.characters.map((character, index) => {
          return (
            <div className="col-12 col-md-4 px-3 characters">
              <Character
                name={character.name}
                uid={character.uid}
                type={"characters"}
              />
            </div>
          );
        })}
      </div>
      <h2 className="text-danger py-4">Planets</h2>
      <div className="scroll-container d-flex">
        {store.planets.map((character, index) => {
          return (
            <div className="col-12 col-md-4 px-3 characters">
              <Character
                name={character.name}
                uid={character.uid}
                type={"planets"}
              />
            </div>
          );
        })}
      </div>
      <h2 className="text-danger py-4">Vehicles</h2>
      <div className="scroll-container d-flex">
        {store.vehicles.map((character, index) => {
          return (
            <div className="col-12 col-md-4 px-3 characters">
              <Character
                name={character.name}
                uid={character.uid}
                type={"vehicles"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
