import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Details from "../views/details";

const Character = (props) => {

  const { store, actions } = useContext(Context);
  const [ Click , setClick ] = useState(false);
 
  const handleClick = () => {actions.addFavorites(props.name)
    Click == true ? setClick(false) : setClick(true) 
  }
  return (
  
      <div className="card border-0">
        <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} className="card-img-top rounded mx-auto d-block" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text"></p>
          <div className="card-body d-flex justify-content-between">
          <Link to={`details/${props.category}/${props.uid}`} className="btn btn-dark mt-2">Read more</Link>
          <button onClick={(handleClick)}  className={ Click === true ? "btn btn-danger border-0" : " btn btn-outline-danger border-0" }>
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
  category: PropTypes.string,

 
};

export default Character;
