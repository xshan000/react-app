import React from 'react'
import './Card.css';


function Card(props) {
    return (
        <div className="card">
            <img src={props.image}/>
            <h4>{props.tlt}</h4>
            <p>{props.desr}</p>
        </div>
    )
}

export default Card;