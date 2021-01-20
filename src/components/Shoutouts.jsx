import React from 'react'
import './shout.css'

const Shoutouts = () => {
    return (
        <div className='shout'>
            <div>
                <img src="one.png" alt="one"/>
                <img src="two.png" alt="two"/>
                <img src="three.png" alt="three"/>
            </div>
            <h5>🙌 Pam, Sammy & Mathew</h5>
            <a style={{fontSize: '14px'}} href="#">🙌 Pam, Sammy & Mathew</a>
            <p>Brilliant work with the Hooli account this week, everyone really stepped up and communcated with them well. Controlling expectations is a big win. I was told they’re really happy with the results.</p>
        </div>
    )
}

export default Shoutouts
