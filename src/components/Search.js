import React from 'react'

function Search(props) {

    function onSubmit(e){
        e.preventDefault()
        props.handleClick()
    }
    function onChange(e){
        props.handleChange(e.target.value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange}/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search