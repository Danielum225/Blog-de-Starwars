import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Details from "../views/details";

const Character = (props) => {

  const { store, actions } = useContext(Context);
  return (
  
      <div className="card">
        <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} className="card-img-top rounded mx-auto d-block" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text"></p>
          <div className="card-body d-flex justify-content-between">
          <Link to={`details/${props.uid}`} className="btn btn-primary mt-2">Read more</Link>
          <button onClick={() => actions.addFavorites(props.name)}  className="btn btn-outline-warning">
            <i className="far fa-heart"></i>
          </button>
          </div>
        </div>
      </div>
  
  );
};

Character.propTypes = {
 
  uid: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,

 
};

export default Character;
