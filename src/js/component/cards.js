import React from "react";
import PropTypes from 'prop-types';

const Cards =(props) => {
    return(
        <div className="col-12 col-md-4">
        <div className="card">
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.gender}{props.hairColor}{props.eyeColor}</p>
    <a href="#" className="btn btn-primary">Learn more!</a>
    <button type="button" class="btn btn-outline-warning"><i class="far fa-heart"></i></button>
  </div>
</div>
</div>
    );
}


Cards.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    hairColor: PropTypes.string,
    eyeColor: PropTypes.string,
  };

  export default Cards;