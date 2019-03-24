import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    
    return (
        <nav>
            <Link to="/search">Search</Link> | 
            <Link to="/random">Random</Link>
        </nav>
    )
}

export default Nav