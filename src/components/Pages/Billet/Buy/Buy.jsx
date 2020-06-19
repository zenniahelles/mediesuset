import React, { useState, useEffect } from "react";
import './../Billet.scss';

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

export default function Buy(props) {
  const { id } = getParams(props.location.search);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data && id) {
      fetch("https://api.mediehuset.net/mediesuset/tickets/" + id)
        .then((res) => res.json())
        .then((apidata) => setData(apidata));
    }
  }, [data, setData, id]);

  return (
    <div>
      {data ? (
        <div className="Buy">
            <h2>KØB BILLET</h2>
            <h3>INFORMATION OM DEN VALGTE BILLET </h3>
          <h4 className="tickettype">{data.item.name}</h4>
          <p>{data.item.description}</p>
          <h3>BESTILLING</h3>
          <input type="num" className="stk"/> <span>Stk. {data.item.name}</span> 
          <span>á</span> 
          <span className="price">DKK {data.item.price}</span>
          <p className="price2">Pris i alt: {data.item.price}</p>
              

    <form>
        <div className="bestilGrid">

            <div className="gridItem">

            <h4>Reserver camp pladser</h4>
                <label>Antal: </label>
                <input type="num" className="antal"/>

                <label className="selection">Vælg camp:</label>
                <select name="camps">
                <option value="colorit">Camp Colorit</option>
                <option value="kultunaut">Camp Kultunaut</option>
                <option value="deluxe">Camp De Luxe</option>
                </select>

                <h4>Indtast brugeroplysninger:</h4>
                <label>Brugernavn/email:</label>
                <br/>
                <input className="brugeropl" type="email" placeholder="Indtast din email"/>
                <br/>
                <label>Adgangskode:</label>
                <br/>
                <input className="brugeropl" type="password"/>
                <br/>
                <label>Gentag adgangskode:</label>
                <br/>
                <input className="brugeropl" type="password"/>
                <br/>
                <label>Navn:</label>
                <br/>
                <input className="brugeropl" type="text"/>
                <br/>
                <label>Adresse:</label>
                <br/>
                <input className="brugeropl" type="text"/>
                <br/>
                <label>Postnummer: </label>
                <input className="bottominput1" type="num"/>
                <label> By: </label>
                <input className="bottominput2" type="text"/>

        </div>

                <div className="gridItem">
                <h4>Vælg forsendelsesmetode</h4>
                <input type="radio"></input>
                <label><b>Jeg ønsker billetterne tilsendt</b><br/>Vi sender billetterne til dig med posten.</label>
                <br/>
                <br/>
                <input type="radio"></input>
                <label><b>Jeg udskriver billetterne selv</b><br/>Du modtager billetterne på din e-mail. Du kan så selv udskrive dem, og du sparer således forsenseldes-gebyr.</label>

                <button className="send">SEND</button>
                </div></div>
            </form>
        
    </div>
) : (
        <div>Loading..</div>
    )}
</div>
);
}
