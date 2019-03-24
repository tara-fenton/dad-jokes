import React from 'react'

function RandomJoke(props) {
    function onClick() {
        props.handleClick()
    }
    return (
        <div className="random">
            {props.randomJoke}
            <button onClick={onClick}>Random Joke</button>
        </div>
    )
}

export default RandomJoke