import React from 'react'

function RandomJoke(props) {
    function onClick() {
        props.handleClick()
    }
    return (
        <div>
            {props.randomJoke}
            <button onClick={onClick}>Random Joke</button>
        </div>
    )
}

export default RandomJoke