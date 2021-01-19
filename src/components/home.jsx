import React from 'react'
import Card from './Card'
import './home.css'
import { data } from './data'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <div className='Nav'>
                <div className='logo'>
                    <img src="Group 1067.png" alt="logo"/>
                    <h3>Culturebook</h3>
                </div>
                <Link to='/'>
                    <h4>Logout</h4>
                </Link>
            </div>
            <div className='container'>
                <h2>12th - 17th December 2020</h2>
                <br/>
                <h5>📸️ What did you do at the weekend?</h5>
                <div className="grid">
                    {
                        data.map(prof => <Card big={prof.big} avImg={prof.avatarImage} avTitle={prof.avatarTitle} disc={prof.disc}/>)
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Home
