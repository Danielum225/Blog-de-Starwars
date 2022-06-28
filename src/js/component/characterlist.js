import React, {useContext} from "react";
import {Context} from "../store/appContext";
import Cards from "./cards";

const CharacterList = () => {
    const {store,actions} = useContext{Context}

    return(
        <div className="container">
            <div className="row">
                {store.cards.map((element, index) => {

                    return(
                        <div className="col-12 col-md-4" key={index}>
                            <Cards 
                            image={cards.image}
                            name={cards.name}
                            gender={cards.gender}
                            hairColor={cards.hairColor}
                            eyeColor={cards.eyeColor}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CharacterList;