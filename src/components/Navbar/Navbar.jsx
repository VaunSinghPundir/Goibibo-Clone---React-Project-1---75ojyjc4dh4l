import React from 'react'
import { Applogo } from './Applogo'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faHotel, faPlane, faTrain } from '@fortawesome/free-solid-svg-icons'
import { Profile } from './Profile'



export const Navbar = () => {
  return (
   <nav className='navbar-container'>
    <Applogo/>

    <ul className='link-container'>
        <li >
        <FontAwesomeIcon icon={faPlane} />        
        <NavLink to="/flight">Flights</NavLink>
        </li>
        <li>
        <FontAwesomeIcon icon={faHotel} />
            <NavLink to="/hotel">Hotels</NavLink>
        </li>
        <li>
        <FontAwesomeIcon icon={faTrain} />
            <NavLink to="/train">Trains</NavLink>
        </li>
        <li>
        <FontAwesomeIcon icon={faBus} />
            <NavLink to="/bus">Buses</NavLink>
        </li>
        {/* <li>
            <button>
                <NavLink to="/login">login</NavLink>
            </button>
        </li>
        <li>
            <button>
                <NavLink to="/logout">logout</NavLink>
            </button>
        </li> */}
        </ul>
        <Profile/>
        
   </nav>
  )
}
