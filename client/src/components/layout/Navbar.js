import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar bg-primary'>
            <h1>
                <i class="fas fa-address-book" />
                Contact Keeper
            </h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    )
}


export default Navbar
