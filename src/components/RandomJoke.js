import React from 'react'

function RandomJoke(props) {
    function test() {
console.log('testtttt')
    }
    return (
        <div>
            {props.randomJoke}
            <button onClick={test}>Random Joke</button>
        </div>
    )
}

export default RandomJoke