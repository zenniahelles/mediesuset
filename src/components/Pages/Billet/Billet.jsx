import React, { useState, useEffect } from 'react';
import './Billet.scss';
import { Link } from 'react-router-dom';


export default function Tickets(props) {

    const [apiData, setApiData] = useState(null);

    async function getTickets() {

        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');

        try {
            const request = await fetch('https://api.mediehuset.net/mediesuset/tickets', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response);
        } catch (error) {
            console.log('getTickets -> Error', error);
        }
    }

    useEffect(() => {
        getTickets()
    }, [])
    return (
        <div>
            <section className="billet">
                <h2>KØB BILLET</h2>
                <div className="billetgrid"><div className="gridItem">
                <h3 className="title">PARTOUT BILLET - ALLE DAGE</h3>
                {
                    apiData && apiData.items.slice(0,2).map(ticket => (
                        <div key={"ticket-" + ticket.id}>
                            <div className="ticketgrid">
                                <h3>{ticket.name}</h3>
                                <h3>{ticket.price} DKK</h3>
                                <Link to={"/buy?id=" + ticket.id}>
                                <button>KØB BILLET</button>
                                </Link>
                                </div>
                            </div>
                        
                 ))}
                </div>


                <div className="gridItem">
                <h3 className="title">ENKELTBILETTER</h3>
                {
                    apiData && apiData.items.slice(2,10).map(ticket => (
                        <div key={"ticket-" + ticket.id}>
                            <div className="ticketgrid">
                                <h3>{ticket.name}</h3>
                                <h3>{ticket.price} DKK</h3>
                                <Link to={"/buy?id=" + ticket.id}>
                                <button>KØB BILLET</button>
                                </Link>
                                </div>
                            </div>
                        
                 ))}</div></div>
            </section>
        </div>
    )
}

