import React from "react";

function Show(props) {
    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h3 style={{textTransform: 'capitalize'}}>{props.pokemon.name}</h3>
            <img src={props.pokemon.image} />
            <a href="/pokemon">Back</a>
        </div>
    )
}

export default Show