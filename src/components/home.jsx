import React from 'react'
import Card from './Card'
import './home.css'
import { data } from './data'
import { Link } from 'react-router-dom'
import Shoutouts from './Shoutouts'

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
                <h3 style={{width: '100%'}}><span style={{color: 'grey', opacity: '0.7'}}>{'<'}</span>12th - 17th December 2020<span style={{color: 'grey', paddingLeft: '10px',opacity: '0.7'}}>{'>'}</span></h3>
                <br/>
                <h5 className='sub'>📸️ What did you do at the weekend?</h5>
                <div className="grid">
                    {
                        data.map(prof => <Card index={prof.index} key={Math.random()} big={prof.big} avImg={prof.avatarImage} avTitle={prof.avatarTitle} disc={prof.disc}/>)
                    }
                    
                </div>
                <h5 className='sub' style={{marginBottom: '20px'}}>🙌 Shoutouts</h5>
    
                <div className='shoutout'>
                    <Shoutouts />
                    <Shoutouts />
                    <Shoutouts />
                </div>
            
            </div>
        </div>
    )
}

export default Home
