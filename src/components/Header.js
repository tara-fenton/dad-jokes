import React from 'react'
import Nav from './Nav'
function Header(props) {

    function handleChange(name){
        props.handleNav(name)
    }

    return (
        <header>
            <div className="logo">
                Dad Jokes
            </div>
            <div>
                <Nav handleChange={handleChange}  />
            </div>
        </header>
    )
}

export default Header