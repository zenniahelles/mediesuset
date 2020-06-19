import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Lineup.scss';

const apiUrl = 'https://api.mediehuset.net/mediesuset/';

export default function Lineup(props) {

const [SceneData, setSceneData] = useState(null);
    return (
        <div className="Lineup">
            
            <div className="scenes">
                <SceneList setSceneData={setSceneData} />
            </div>

            <div className="artists">
                <ArtistList data={SceneData} />
            </div>
        </div>
    )
}

const ArtistList = props => {
    const {data} = props;
    return (
        <div className="artistGrid">
            {data && data.map(artist => (
                <div key={"artist-" + artist.id}>
                    <div className="gridItem">
                    <Link to={"/artist?id=" + artist.id}>
                    <img src={artist.image}/>
                    <h4>{artist.title}</h4>
                    <p>{artist.local_time}</p>
                    </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}


const SceneList = props => {
    const { setSceneData } = props;
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        if(!apiData) {
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => setApiData(data));
        }
    }, [apiData, setApiData]);

    const fetchSceneData = id => {
        fetch('https://api.mediehuset.net/mediesuset/')
            .then((res) => res.json())
            .then((data) => {
                let stages = data.stages.items;
                let stage = stages.find(function(item, index) {
                    if(item.id === id) {
                        return item;
                    } else {
                        return null;
                    }
                });
                setSceneData(stage.events.items)
            })
    }

    return (
        <div>
            <h2>LINE-UP</h2>
            <div className="scenegrid">
                {apiData && apiData?.stages.items.map((item) => {
                    return <span key={item.id}>
                                <button onClick={e => fetchSceneData(item.id)}>
                                    {item.name}
                                </button>
                            </span>
                })}    
    </div></div>
    )
}
