import React from 'react'

function Search(props) {

    function onSubmit(e){
        e.preventDefault()
        props.handleClick()
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search