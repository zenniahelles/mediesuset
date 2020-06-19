import React from 'react';
import Styles from "./Nav.scss";
import routes from '../Router/routes';
import { NavLink } from 'react-router-dom';
import Logoimg from '../Images/logo.jpg';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <nav className={Styles.sitenav}>
            <ul>
                <div className="menugrid">
                <div className="logo">
                <li className={Styles.logolink}><NavLink to={routes[0].path} ><img src={Logoimg}></img></NavLink></li>
                </div>
                <div className="menu">
                <Link to={"/billet"}><button>KØB BILLET</button></Link>
                <li className={Styles.nyhederlink}><NavLink to={routes[0].path} >{routes[0].name}</NavLink></li>
                
                <div className="dropdown">
                <li className="dropbtn"><NavLink to={routes[1].path} >{routes[1].name}</NavLink>
                    <ul className="dropdown-content">
                    <Link to={"/Program"}><li>PROGRAM</li></Link>
                    <Link to={"/Line-up"}><li>LINE-UP</li></Link>
                    </ul>
                </li></div>

                <li className={Styles.campslink}><NavLink to={routes[2].path} >{routes[2].name}</NavLink></li>
                <li className={Styles.praktisklink}><NavLink to={routes[3].path} >{routes[3].name}</NavLink></li>
                <li className={Styles.loginlink}><NavLink to={routes[4].path} >{routes[4].name}</NavLink></li>
                </div>
                </div>
            </ul>
        </nav>
    );
}