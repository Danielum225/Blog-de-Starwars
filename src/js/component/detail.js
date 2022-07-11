import React from "react";
import PropTypes from "prop-types";

const Detail = (props) => {
  
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`}className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p>{props.description}</p>
            <ul>
              {
                Object.keys(props.properties).map((element, index) =>{
                  return <li key={index}>{element}: {props.properties[element]}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



Detail.propTypes = {
  uid: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  properties: PropTypes.object,
  
};
export default Detail;
