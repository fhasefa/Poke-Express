import React from "react";

function Index(props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };

    return (
        <div>
            <h1 style={myStyle}>See All The Pokemon!</h1>
            <ul>
                {props.pokemon.map((item, index) => 
                    <li key={index}>
                        <a href={`/pokemon/${item._id}`}><strong style={{textTransform: 'capitalize'}}>{item.name}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/pokemon/new">Add...</a>
        </div>
    )
}

export default Index