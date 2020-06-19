import React from 'react';
import "./Footer.scss";
import hancock from '../Images/hancock.png';

export default function Footer(props) {
    return (
        <footer>
            {props.children}
            <section className="follow">
                <h2>FØLG OS</h2>
                <div className="icons">
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-facebook-square"></i>
                </div>
                </section>
            <section className="nyhedsbrev">
                <h2>TILMELD NYHEDSBREV</h2>
                <p>Få seneste nyt sendt direkte til din indbakke</p>
                
            <form>
                <fieldset>
                <input type="email" id="email" name="email" required placeholder="INDTAST DIN EMAIL"/>
                <button type="submit" value="submit">TILMELD NYHEDSBREV</button>
                </fieldset>
            </form>

            <img className="hancock" src={hancock} alt="kvalitet"/>
                
                </section>
        </footer>
    )
}