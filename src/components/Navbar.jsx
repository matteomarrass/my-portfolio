import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './app.css'

function Navbar(){
    return(
        <nav>
            <Link to='/'><h2 id="titleCurriculum">📗 Matteo Marras</h2></Link>
            <ul>
                <NavLink to='/' className='link'>Cambia Lingua</NavLink>
                <NavLink to='/homeit' className='link'>Panoramica</NavLink>
                <NavLink to='/jobs' className='link'>Esperienze Lavorative</NavLink>
                <NavLink to='/projects' className='link'>Progetti</NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;