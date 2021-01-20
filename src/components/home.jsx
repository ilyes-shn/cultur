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
                <h3 style={{fontWeight: 'blod'}}><span style={{color: 'grey', paddingRight: '10px'}}>{'<'}</span>12th - 17th December 2020<span style={{color: 'grey', paddingLeft: '10px'}}>{'>'}</span></h3>
                <br/>
                <h5>📸️ What did you do at the weekend?</h5>
                <div className="grid">
                    {
                        data.map(prof => <Card index={prof.index} key={Math.random()} big={prof.big} avImg={prof.avatarImage} avTitle={prof.avatarTitle} disc={prof.disc}/>)
                    }
                    
                </div>
                <h3 style={{marginBottom: '20px'}}>🙌 Shoutouts</h3>
                <div style={{columnCount: 3, columnGap: '1px', margin: '0px auto'}}>
                <Shoutouts />
                <Shoutouts />
                <Shoutouts />
                </div>

            </div>
        </div>
    )
}

export default Home
