import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onTextChange = q => {
        setText(q)
        getQuery(q)
    }
   
    return (
       <section>
           <form>
               <input 
                value={text}
                type='text'
                className='form-control'
                placeholder='Search characters'
                autoFocus
                onChange={(e) => onTextChange(e.target.value)}
               />
           </form>
       </section>
    )
}

export default Search
