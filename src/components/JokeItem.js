import React from 'react'

function JokeItem(props) {
   
    return (
        <div className='joke-item'>
            {props.joke.joke}
        </div>
    )
}

export default JokeItem