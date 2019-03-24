import React from 'react'

function JokeItem(props) {
   
    return (
        <div>
            {props.joke.joke}
        </div>
    )
}

export default JokeItem