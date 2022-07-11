import React, { useEffect, useState } from "react";
import Detail from "../component/detail";
import { useParams } from "react-router-dom";


const Details = () => {
    const params = useParams()
    const [detalle, setDetalle] = useState()
    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/${params.category}/${params.detailsid}`)
        .then(response=>response.json())
        .then(response=>setDetalle(response.result))
    },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {
            detalle ? 
            <Detail
            uid={detalle.uid} name={detalle.properties.name} description={detalle.description} type={params.category == "people" ? "characters" : params.category} properties={detalle.properties}
             /> : ""
          }
            
        </div>
      </div>
    </div>
  );
};
export default Details;
