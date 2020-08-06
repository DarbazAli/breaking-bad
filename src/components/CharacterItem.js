import React from 'react'

const CharacterItem = ({item}) => {
    // console.log(item);
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.img}></img>
        </div>
    )
}

export default CharacterItem
