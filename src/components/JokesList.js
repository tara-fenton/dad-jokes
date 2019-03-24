import React from 'react'
import JokeItem from './JokeItem';

function JokesList(props) {
    
    const jokes = props.jokes.map(joke => {
        return <JokeItem joke={joke} key={joke.id} />
    })

    return (
        <div className="jokes-list">
            {jokes}
        </div>
    )
}

export default JokesList