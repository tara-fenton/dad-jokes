import React from 'react'
import Nav from './Nav'
function Header() {

    return (
        <header>
            <div className="logo">
                Dad Jokes
            </div>
            <div>
                <Nav />
            </div>
        </header>
    )
}

export default Header