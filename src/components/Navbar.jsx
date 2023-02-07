import React from "react";
import { BrowserRouter, Route, Link } from 'react-dom';

function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to='/'></Link>Home</li>
                <li><Link to='/jobexperiences'></Link>Esperienze Lavorative</li>
                <li><Link to='/projects'>Progetti</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;