import React from "react";
import { PropTypes } from "prop-types";

const Character = (props) => {
  return (
  
      <div className="card">
        <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text"></p>
          <a href="#" className="btn btn-primary">
            Learn more!
          </a>
          <button type="button" className="btn btn-outline-warning">
            <i className="far fa-heart"></i>
          </button>
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
