import React, { useState, useEffect } from "react";
import './../Camps.scss';

const getParams = (url) => {
  return url
    .split("?")[1]
    .split("&")
    .reduce((obj, keyvals) => {
      const [key, val] = keyvals.split("=");
      obj[key] = val;
      return obj;
    }, {});
};

export default function Camp(props) {
  const { id } = getParams(props.location.search);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data && id) {
      fetch("https://api.mediehuset.net/mediesuset/camps/" + id)
        .then((res) => res.json())
        .then((apidata) => setData(apidata));
    }
  }, [data, setData, id]);

  return (
    <div>
      {data ? (
        <div className="Camp">
        <img src={data.item.image}/>
          <h4>{data.item.name}</h4>
          <p>{data.item.description}</p>
          <p><b>På {data.item.name} får du:</b> 
          
          {data.item.facilities.title}</p>
          <p><b>Antal pladser i alt:</b>
          <br /> 
              {data.item.num_people}</p>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}
