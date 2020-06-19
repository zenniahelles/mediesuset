import React, { useState, useEffect } from 'react';
import Banner from '../../Images/banner.jpg';
import './Nyheder.scss';
import { Link } from 'react-router-dom';


export default function News(props) {

    const [apiData, setApiData] = useState(null);

    async function getNews() {

        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');

        try {
            const request = await fetch('https://api.mediehuset.net/mediesuset/news', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response);
        } catch (error) {
            console.log('getNews -> Error', error);
        }
    }

    useEffect(() => {
        getNews()
    }, [])
    return (
        <div>
            <section className="nyheder">
                <section className="banner"><img src={Banner} alt="banner image"/></section>
                <h2>NYHEDER</h2>
                <div className="nyhederGrid">
                {
                    apiData && apiData.items.slice(0,6).map(nyhed => (
                        <div key={"nyhed-" + nyhed.id}>
                            <div className="gridItem">
                                <img src={nyhed.image} />
                                <h3>{nyhed.title}</h3>
                                <p>{nyhed.teaser.slice(0,150)}...</p>
                                <Link to={"/nyhed?id=" + nyhed.id}>
                                <button>LÆS MERE</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                <div className="archive"><Link to={"/arkiv"}><button className="arkiv">NYHEDSARKIV</button></Link></div>
            </section>
        </div>
    )
}





