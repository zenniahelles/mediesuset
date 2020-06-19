import React from 'react';
import Styles from "./Header.scss";

export default function Header(props) {
    return (
        <header>
            {props.children}
        </header>
    )
}