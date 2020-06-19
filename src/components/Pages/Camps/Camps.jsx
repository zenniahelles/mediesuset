import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Camps.scss';

export default function Camps(props) {

const [apiData, setApiData] = useState(null);

async function getCamps() {

    const fetchHeaders = new Headers();
    fetchHeaders.append('Accept', 'application/json');

    try {
        const request = await fetch('https://api.mediehuset.net/mediesuset/camps', { headers: fetchHeaders });
        const response = await request.json();
        console.log(response);
        setApiData(response);
    } catch (error) {
        console.log('getCamps -> Error', error);
    }
}

useEffect(() => {
    getCamps()
}, [])

    return (
        <div className="Camps">
            <h2>CAMPS</h2>
        <div className="campGrid">
            {
           apiData && apiData.items.map(camp => (
                <div key={"camp-" + camp.id}>
                    <div className="gridItem">
                    <img src={camp.image}/>
                    <h4>{camp.name}</h4>
                    <p>{camp.local_time}</p>
                    <p>{camp.description.slice(0,200)}</p>
                    <p>Samlet antal pladser: {camp.num_people}</p>
                     <Link to={"/camp?id=" + camp.id}>
                         <button>LÆS MERE</button>
                    </Link>
                    </div>
                </div>
            ))}
        </div></div>
    )
}