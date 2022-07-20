import React from "react";
import PropTypes from "prop-types";

const Detail = (props) => {
  
  return (
    <div className="card rounded m-4 border-0">
      <div className="row no-gutter">
        <div className="col-md-6">
          <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`}className="card-img" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title pt-5">{props.name}</h3>
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
