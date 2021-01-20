import React from 'react'
import './Modal.css'

const Modal = ({big, avImg, avTitle, disc}) => {


    return (
        <div className='carte'>
            <img style={{marginBottom: '30px'}} src={big} alt="cover"/>
            <div style={{display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>
                <img src={avImg} alt="profile"/>
                <h5 style={{marginTop: '10px', paddingLeft: '10px'}}>{avTitle}</h5>
            </div>
            <p style={{paddingTop: '20px'}}>{disc}</p>
        </div>
    )
}

export default Modal
