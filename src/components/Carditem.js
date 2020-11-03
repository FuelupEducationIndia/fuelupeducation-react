import React from 'react'

function Carditem(props) {
    return (
        <div className="cardItem">
            <img src={props.src} className="image" alt="img"></img>
            <h1>{props.head}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Carditem

