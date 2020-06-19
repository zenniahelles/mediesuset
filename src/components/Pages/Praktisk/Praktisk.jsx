import React from 'react';
import './Praktisk.scss';
import Map from './../../Images/mediesuset-map.jpg';
import Kort from './../../Images/kort.jpg';

export default function Praktisk(props) {
    return (

<div className="Praktisk">
<h2>PRAKTISK INFO</h2>

    <div className="praktiskGrid">
        <div className="gridItem">
            <h3>Kort over festivalen:</h3>
            <img src={Map} alt="map"/>
        </div>
        <div className="gridItem">
            <h3>Find vej:</h3>
            <img src={Kort} alt="map"/>
        </div>
    </div>
</div>

    )
}