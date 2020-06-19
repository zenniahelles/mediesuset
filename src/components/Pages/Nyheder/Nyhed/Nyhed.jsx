import React, { useState, useEffect } from "react";
import './../Nyheder.scss';

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
      fetch("https://api.mediehuset.net/mediesuset/news/" + id)
        .then((res) => res.json())
        .then((apidata) => setData(apidata));
    }
  }, [data, setData, id]);

  return (
    <div>
      {data ? (
        <div className="Nyhed">
        <img src={data.item.image}/>
          <h4>{data.item.title}</h4>
          <p>{data.item.content}</p> 
          <p>Skrevet af: {data.item.author}</p>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}
