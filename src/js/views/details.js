import React, { useEffect, useState } from "react";
import Detail from "../component/detail";
import { useParams } from "react-router-dom";


const Details = () => {
    const params = useParams()
    const [detalle, setDetalle] = useState()
    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/${detalle.typ}/${params.detailsid}`)
        .then(response=>response.json())
        .then(response=>setDetalle(response))
    },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {
            detalle ? 
            <Detail
            image={detalle.image} name={detalle.name} description={detalle.gender} type={detalle.type}
             /> : ""
          }
            
        </div>
      </div>
    </div>
  );
};
export default Details;
