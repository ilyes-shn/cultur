import React from 'react'
import './Card.css'

const Card = ({big, avImg, avTitle, disc}) => {
    return (
        <div className='cardd'>
            <img src={big} alt={big} className='big'/>
            <div className='avatar'>
                <img src={avImg} alt={avImg}/>
                <h5>{avTitle}</h5>
            </div>
            <p>{disc}</p>
        </div>
    )
}

export default Card
