import React, { useState, useEffect } from "react";
import './Artist.scss';

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

export default function Artist(props) {
  const { id } = getParams(props.location.search);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data && id) {
      fetch("https://api.mediehuset.net/mediesuset/events/" + id)
        .then((res) => res.json())
        .then((apidata) => setData(apidata));
    }
  }, [data, setData, id]);

  return (
    <div>
      {data ? (
        <div className="Artist">
          <h3>{data.item.stage_name} KL. {data.item.local_time.slice(11,16)}</h3>
          <h4>{data.item.title}</h4>
          <img src={data.item.image}/>
          <p>{data.item.description}</p>
          <a href="/Line-up">Tilbage til Line-up</a>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}
