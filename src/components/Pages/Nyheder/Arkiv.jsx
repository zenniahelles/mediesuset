import React, { useState, useEffect } from 'react';
import Banner from '../../Images/banner.jpg';
import './Nyheder.scss';


export default function FetchData(props) {

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
            <section className="nyheder arkiv">
                <h2>NYHEDSARKIV</h2>
                <div className="nyhederGrid">
                {
                    apiData && apiData.items.map((item, i) =>
                        <div key={i}>
                            <div className="gridItem">
                                <h3>{item.title}</h3>
                                <p>{item.teaser.slice(0,100)}...</p>
                                <button>LÆS MERE</button>
                            </div>
                        </div>
                    )
                }</div>
            </section>
        </div>
    )
}





