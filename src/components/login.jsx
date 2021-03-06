import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='log'>
            <div className='card'>
                <img src="Group 1067.png" alt="logo" className='logoo'/>
                <h2>Culturebook</h2>
                <h5>Strengthening social connection & building brilliant company cultures 💪</h5>
                <img src="Big Shoes Discussion2 1.png" alt="bigImage" className='bigImage'/>
                <h5>Sign to see your <span style={{fontWeight: "bold"}}>Weekly Digest</span></h5>
                <Link to='/feed'>
                <button>
                    <img src="sign_in_with_slack@2x 1.png" alt="slack"/>
                </button>
                </Link>
            </div>
            <img src="Group 1228.png" alt="footer" className='footer'/>
        </div>
    )
}

export default Login
