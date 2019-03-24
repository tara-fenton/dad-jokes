import React from 'react'

function Nav(props) {

    function onClick(e){
        props.handleChange(e.target.name)
    }
    
    return (
        <nav>
            <button name='search' onClick={onClick}>Search</button>
            <button name='random'  onClick={onClick}>Random</button>
        </nav>
    )
}

export default Nav