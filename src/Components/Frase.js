import React from 'react'

const Frase = ({frase}) =>(
    
    <blockquote className="blockquote">
        <p className="mb-0">{frase.quote}</p>
        <footer className="blockquote-footer">Author: <cite title="Source Title">{frase.author}</cite></footer>
    </blockquote>

)

export default Frase