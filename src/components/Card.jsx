import React, { useState } from 'react'
import './Card.css'
import Modal from './Modal'


const Card = ({big, avImg, avTitle, disc, index}) => {
    const [open,setOpen] = useState(false)
    

    return (
        <div className='cardd' >
            <img src={big} alt={big} className='big'onClick={() => setOpen(true)}/>
            <div className='avatar'>
                <img src={avImg} alt={avImg}/>
                <h5>{avTitle}</h5>
            </div>
            <p>{disc}</p>
            {
                open && (
                <div className='modal'>
                    <h3 onClick={() => setOpen(false)}>X</h3>
                    <div className='arrow' style={{display: 'flex', alignItems: 'center'}}>
                    <h2 style={{padding: '25px', color: 'white'}}>{'<'}</h2>
                        <Modal big={big} avImg={avImg} avTitle={avTitle} disc={disc}/>
                    <h2 style={{padding: '25px', color: 'white'}}>{'>'}</h2>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Card
