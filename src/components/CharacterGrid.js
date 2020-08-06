import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section>
        {
            items.map( item => (
                <h1 key={item.char_id}>{item.name}</h1>
            ))
        }
    </section>)
}

export default CharacterGrid
