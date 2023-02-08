import React from "react";
import { NavLink } from 'react-router-dom';
import './app.css'

function Navbar(){
    return(
        <nav>
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