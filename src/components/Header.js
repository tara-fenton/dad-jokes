import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav'

function Header() {

    return (
        <header>
            <div className="logo">
                <Link to="/">Dad Jokes</Link> 
            </div>
            <div className='nav'>
                <Nav  />
            </div>
        </header>
    )
}

export default Header